import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataDir = path.join(__dirname, '..', 'data')

function loadJSON(filename){
    const filePath = path.join(dataDir, filename)
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'))
}

export const kpop_merch = loadJSON('kpop_merch.json')

import 'dotenv/config'
import { Pool } from 'pg'

let pool = null;

export function getPool() {
    if (pool === null){
        pool = new Pool({
            connectionString: process.env.DATABASE_URL,
        })
    }
    return pool;
}

