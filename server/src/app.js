import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import bookRoutes from './routers/bookRoutes.js'
import kpopRoutes from './routers/kpopRoutes.js'

const app = express()

const PORT = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.use('/books', bookRoutes)
app.use('/kpop_merch', kpopRoutes)

app.listen(PORT, (err) => {
    if(!err)
        console.log(`Server running on port ${PORT}`);
    else
        console.log(`Error connecting to the server ${err}`)
})