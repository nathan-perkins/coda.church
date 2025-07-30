import mongoose from 'mongoose'
import Text from '../models/text.js'

export const getTexts = async (req, res) => {
    try {
        const texts = await Text.find({})
        res.status(200).json({ success: true, data: texts })
    } catch (err) {
        console.log('Error in fetching texts:', err.message)
        res.status(500).json({ success: false, message: 'Server error' })
    }
}

export const createText = async (req, res) => {
    const text = req.body // user supplied data

    if (!text.title || !text.author || !text.content) {
        return res.status(400).json({ success: false, message: 'Please provide all fields' })
    }

    const newText = new Text(text)

    try {
        await newText.save()
        res.status(201).json({ success: true, data: newText })
    } catch (err) {
        console.log('Error in creating text', err.message)
        res.status(500).json({ success: false, message: 'Server error' })
    }
}

export const updateText = async (req, res) => {
    const { id } = req.params

    const text = req.body

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: 'Invalid text id' })
    }

    try {
        const updatedText = await Text.findByIdAndUpdate(id, text, { new: true })
        res.status(200).json({ success: true, data: updatedText})
    } catch (err) {
        res.status(500).json({ success: false, message: 'Server error' })
    }
}

export const deleteText = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: 'Invalid text id' })
    }

    try {
        await Text.findByIdAndDelete(id)
        res.status(200).json({ success: true, message: 'Text deleted' })
    } catch (err) {
        console.log('Error in deleting text:', err.message)
        res.status(500).json({ success: false, message: 'Server error' })
    }
}