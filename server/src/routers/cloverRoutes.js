import express from 'express'
import 'dotenv/config'

const cloverRoutes = express.Router()

const CLOVER_BASE_URL = process.env.CLOVER_BASE_URL
const CLOVER_MERCHANT_ID = process.env.CLOVER_MERCHANT_ID
const CLOVER_API_TOKEN = process.env.CLOVER_API_TOKEN

cloverRoutes.get('/items', async (req, res) => {
    try {
        const response = await fetch(
            `${CLOVER_BASE_URL}/v3/merchants/${CLOVER_MERCHANT_ID}/items?expand=itemStock`,
            {
                headers: {
                    'Authorization': `Bearer ${CLOVER_API_TOKEN}`,
                    'User-Agent': 'your-app-name/1.0'
                }
            }
        )
        //const data = await response.json()

        const url = `${CLOVER_BASE_URL}/v3/merchants/${CLOVER_MERCHANT_ID}/items?expand=itemStock`
        console.log('DEBUG full URL:', JSON.stringify(url))
        if (!response.ok) {
            const errorBody = await response.text()
            console.error(`Clover API error (${response.status}):`, errorBody)
            return res.status(response.status).json({ error: 'Clover API request failed' })
        }

        console.log('DEBUG status:', response.status)
        const rawText = await response.text()
        console.log('DEBUG raw body:', rawText)

        if (!rawText) {
            return res.status(response.status).json({ error: 'Empty response from Clover' })
        }

        const data = JSON.parse(rawText)


        res.json(data)
    } catch (error) {
        console.error('Error fetching items:', error)
        res.status(500).json({ error: 'Failed to fetch items' })
    }
})

export default cloverRoutes
