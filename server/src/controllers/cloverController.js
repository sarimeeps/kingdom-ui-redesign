import { loadInventory } from '../services/cloverData.js'

// export async function getAllItems(req, res) {
//     try {
//         const data = await loadInventory()

//         const categories = [
//             'K Pop',
//             'Romance Books'
//         ]

//         const filteredInventory = data.elements.filter(item => item.categories?.elements?.some(category => categories.includes(category.name)))
//         res.json(filteredInventory)
//     } catch (err) {
//         console.error('Error fetching items:', err)
//         res.status(err.status || 500).json({ error: err.message || 'Failed to fetch items' })
//     }
// }

const cache = {
    kpop: {
        data: null,
        timestamp: null
    },
    books: {
        data: null,
        timestamp: null
    }
}

const cacheDuration = 60 * 60 * 1000

export async function getKpopItems(req, res) {
    try {

        const now = Date.now()

        if (cache.kpop && now - cache.kpop.timestamp < cacheDuration) {
            return res.json(cache.kpop.data)
        }

        const data = await loadInventory(process.env.KPOP_CAT_ID)

        cache.kpop.data = data.elements
        cache.kpop.timestamp = Date.now()

        res.json(cache.kpop.data)
    } catch (err) {
        console.error(err)
        res.status(500).json({
            error: 'Failed to retrieve Kpop items'
        })
    }
}

export async function getBookItems(req, res) {

    try {

        const now = Date.now()

        if (cache.books && now - cache.books.timestamp < cacheDuration) {
            return res.json(cache.books.data)
        }

        const data = await loadInventory(process.env.ROM_BOOK_CAT_ID)

        cache.books.data = data.elements.map(book => {
            const separator = ' by '
            const separatorIndex = book.name.toLowerCase().lastIndexOf(separator)
            
            return {
                ...book,
                price: book.price / 100,
                name: book.name.slice(0, separatorIndex),
                author: book.name.slice(separatorIndex + separator.length),
                status: book.available
            }
        })

        cache.books.timestamp = Date.now()

        res.json(cache.books.data)
    } catch (err) {
        console.error(err)
        res.status(500).json({
            error: 'Failed to retrieve book items'
        })
    }
}