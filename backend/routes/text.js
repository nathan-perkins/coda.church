import express from 'express'

import { createText, deleteText, getTexts, updateText } from '../controllers/text.js'

const router = express.Router()

router.get('/', getTexts)
router.post('/', createText)
router.put('/:id', updateText)
router.delete('/:id', deleteText)

export default router