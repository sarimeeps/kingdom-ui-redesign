import { Router } from 'express'

import { getKpopItems, getBookItems } from '../controllers/cloverController.js'


const cloverRouter = Router()



// TODO: dev purposes, remove later
cloverRouter.get('/kpop', getKpopItems)

cloverRouter.get('/books', getBookItems)

export default cloverRouter
