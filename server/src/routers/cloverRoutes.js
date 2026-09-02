import { Router } from 'express'
// import { getAllItems } from '../controllers/cloverController.js'

import { getKpopItems, getBookItems } from '../controllers/cloverController.js'

const cloverRouter = Router()

// cloverRouter.get('/items', getAllItems)

cloverRouter.get('/kpop', getKpopItems)

cloverRouter.get('/books', getBookItems)

export default cloverRouter
