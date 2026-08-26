import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import bookRoutes from './routers/bookRoutes.js'
import kpopRoutes from './routers/kpopRoutes.js'
import cloverRoutes from './routers/cloverRoutes.js'

const app = express()

const PORT = process.env.PORT


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors({
    origin: 'http://localhost:5173'
}))

app.use('/books', bookRoutes)
app.use('/kpop_merch', kpopRoutes)
app.use('/clover', cloverRoutes)

// app.listen(PORT, (err) => {
//     if(!err)
//         console.log(`Server running on port ${PORT}`);
//     else
//         console.log(`Error connecting to the server ${err}`)
// })


const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

server.on('error', (err) => {
    console.error(`Error starting server: ${err.message}`);
})



