const mongoose = require('mongoose')
//creating a schema(a table)
const authorSchema = new mongoose.Schema({
    name: {
    type: String,
    required:true
    }
})
module.exports = mongoose.model('Author', authorSchema)