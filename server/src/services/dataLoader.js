import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataDir = path.join(__dirname, '..', 'data')

function loadJSON(filename){
    const filePath = path.join(dataDir, filename)
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'))
}

export const books = loadJSON('books.json')
export const kpop_merch = loadJSON('kpop_merch.json')