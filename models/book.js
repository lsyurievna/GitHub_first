const mongoose = require('mongoose')
//creating a schema(a table)
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required:true
    },
    description: {
        type: String,
        required: false
    },
    publishDate: {
        type: Date,
        required: true
    }, 
    pageCount: {
        type: Number,
        required: true
    }, 
    createDate: {
        type: Date,
        requred: true,
        default: Date.now
    }, 
    coverImageName: {
        type: String,
        require: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Author'
    }
})
module.exports = mongoose.model('Book', bookSchema)