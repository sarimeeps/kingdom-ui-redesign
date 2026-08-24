import express from 'express'
import 'dotenv/config'
import cors from 'cors'

const app = express()

const PORT = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.listen(PORT, (err) => {
    if(!err)
        console.log(`Server running on port ${PORT}`);
    else
        console.log(`Error connecting to the server ${err}`)
})