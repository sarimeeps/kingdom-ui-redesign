import { books } from '../services/dataLoader.js'

export function getAllBooks(req, res) {
    res.json(books)
}