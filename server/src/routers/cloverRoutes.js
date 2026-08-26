import express from 'express'
import 'dotenv/config'

const cloverRoutes = express.Router()

const CLOVER_BASE_URL = process.env.CLOVER_BASE_URL
const CLOVER_MERCHANT_ID = process.env.CLOVER_MERCHANT_ID
const CLOVER_API_TOKEN = process.env.CLOVER_API_TOKEN

cloverRoutes.get('/items', async (req, res) => {
    try{
        const response = await fetch(
            `${CLOVER_BASE_URL}/v3/merchants/${CLOVER_MERCHANT_ID}/items?expand=itemStock`,
            {
                headers: {
                    'Authorization': `Bearer ${CLOVER_API_TOKEN}`,
                    'User-Agent': 'your-app-name/1.0'
                }
        }
    )
    const data = await response.json()

    console.log(data)

        res.json(data)
    } catch (error) {
        console.error('Error fetching items:', error)
        res.status(500).json({ error: 'Failed to fetch items' })
    }
})

export default cloverRoutes
