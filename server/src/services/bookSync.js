import { getPool } from './db.js'
import { loadInventory } from './cloverData.js'
import { fetchGoogleCover } from './bookCovers.js'

//adjusting book data formatting 
function parseBook(item) {
    const separator = ' by '
    const index = item.name.toLowerCase().lastIndexOf(separator)

    const base = {
        price: item.price / 100,
        isbn: item.code,
        available: item.available ?? true
    }

    if (index === -1){
        return {
            ...base,
            title: item.name,
            author: null
        }
    }
    return {
        ...base,
        title: item.name.slice(0, index),
        author: item.name.slice(index + separator.length),
    }
}

//fetching and inserting book data from clover into neon
export async function syncBooks({ limit } = {}) {
    const pool = getPool()

    const data = await loadInventory(process.env.ROM_BOOK_CAT_ID, {max: limit})

    const byIsbn = new Map()
    for (const item of data.elements){
        if (!item.code) continue
        byIsbn.set(item.code, parseBook(item))
    }

    const books = [...byIsbn.values()]

    for (const b of books) {
        await pool.query(
            `INSERT INTO "books"
                (book_title, book_author, book_price, isbn, book_available)
                VALUES ($1, $2, $3, $4, $5)
                ON CONFLICT (isbn) DO UPDATE SET
                    book_price = EXCLUDED.book_price,
                    book_available = EXCLUDED.book_available
                `,
            [b.title, b.author, b.price, b.isbn, b.available]
        )
    }
    return books.length
}

const sleep = ms => new Promise(r => setTimeout(r, ms))

//fetching covers for books stored without a cover
export async function syncCovers({ limit = 50 } = {}){
    const pool = getPool()

    const { rows } = await pool.query(
        `SELECT book_id, book_title, book_author FROM "books"
        WHERE book_cover IS NULL AND book_title IS NOT NULL AND book_author IS NOT NULL
        LIMIT $1
        `, [limit]
    )

    let found = 0
    for (const book of rows){
        try{
            const cover = await fetchGoogleCover(book.book_title, book.book_author)
            if (cover){
                await pool.query(
                    `UPDATE "books" SET book_cover = $1 WHERE book_id = $2`,
                    [cover, book.book_id]
                )
                found++
            } else{
                console.log(`No cover for ${book.book_title}`)
            }
        } catch (err){
            console.error(err.message)
        }
        await sleep(1200)
    }
    return { checked: rows.length, found }
}