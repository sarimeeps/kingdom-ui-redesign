import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import bookRouter from './routers/bookRoutes.js'
import kpopRoutes from './routers/kpopRoutes.js'
import cloverRouter from './routers/cloverRoutes.js'

const app = express()
const PORT = process.env.PORT || 4242;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({
    origin: 'http://localhost:5173'
}))

app.use('/books', bookRouter)
app.use('/kpop_merch', kpopRoutes)
app.use('/clover', cloverRouter)

const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

server.on('error', (err) => {
    console.error(`Error starting server: ${err.message}`);
})



