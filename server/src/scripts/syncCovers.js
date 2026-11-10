import 'dotenv/config'
import { syncCovers } from '../services/bookSync.js'
import { getPool } from '../services/db.js'

try {
    const result = await syncCovers({ limit: 300 })
    console.log(result)
} catch (err) {
    console.error('Cover sync failed:', err)
    process.exitCode = 1
} finally {
    await getPool().end()
}