import { getPool } from '../services/db.js'

export async function getBooks(req, res) {
    try {
        const pool = getPool();
        const { rows } = await pool.query('SELECT * FROM "books"')
        
        const books = rows.map(book => ({
            id: book.book_id,
            name: book.book_title,
            author: book.book_author,
            price: Number(book.book_price),
            cover: book.book_cover,
            available: book.book_available
        }))
        res.json(books)
    } catch (err){
        console.error(err)
        res.status(500).json({error: 'Failed to retrieve book items'})
    }
}