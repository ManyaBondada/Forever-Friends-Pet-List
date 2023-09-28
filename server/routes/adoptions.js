import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import AdoptionsController from '../controllers/adoptions.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()

router.get('/', AdoptionsController.getAdoptions)

router.get('/:adoptionId', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../../client/public/adoption.html'))
})

export default router