import mongoose from 'mongoose'

const textSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
}, {
    timestamps: true // createdAt, updatedAt
})

const Text = mongoose.model('Text', textSchema)

export default Text