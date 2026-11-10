import 'dotenv/config' 
import { syncBooks } from '../services/bookSync.js'
import { getPool } from '../services/db.js'

try {
    const count = await syncBooks({limit: Infinity})
    console.log(`Sycned ${count} books`)
} catch (err) {
    console.error('Sync failed:', err)
    process.exitCode = 1
} finally {
    await getPool().end()
}