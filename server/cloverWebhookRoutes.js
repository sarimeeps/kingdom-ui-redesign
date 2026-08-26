// routers/cloverWebhookRoutes.js
import express from 'express'
const router = express.Router()

router.post('/webhook', (req, res) => {
    // Clover expects a fast 200 response — acknowledge receipt first
    res.sendStatus(200)

    // then process the payload (e.g. re-fetch the changed item, update your cache/DB)
    console.log('Webhook event received:', req.body)
})

export default router