import express from 'express'

import mongoose from 'mongoose'
import Text from '../models/text.js'

const router = express.Router()

router.post('/', async (req, res) => {
    const text = req.body // user supplied data

    if (!text.title || !text.author || !text.content) {
        return res.status(400).json({ success: false, message: 'Please provide all fields' })
    }

    const newText = new Text(text)

    try {
        await newText.save()
        res.status(201).json({ success: true, data: newText })
    } catch (err) {
        console.log('Error in creating product', err.message)
        res.status(500).json({ success: false, message: 'Server error' })
    }
})

export default router