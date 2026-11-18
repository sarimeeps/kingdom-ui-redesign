import 'dotenv/config' 
import { syncBooks } from '../services/bookSync.js'
import { getPool } from '../services/db.js'

try {
    const {synced, removed} = await syncBooks()
    console.log(`Sycned ${synced} books, removed ${removed}`)
} catch (err) {
    console.error('Sync failed:', err)
    process.exitCode = 1
} finally {
    await getPool().end()
}