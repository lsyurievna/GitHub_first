const express = require('express')
const Book = require('../models/book')
const Author = require('../models/author')
const router = express.Router()

//All Books route
router.get('/', async (req,res)=> {
    res.send('All Books')

})
//New Book route
router.get('/new', async (req, res) => {
    try {
        const authors = await Author.find({})
        const book = new Book()
        res.render('books/new', {
            authors: authors,
            book: book
        })
    }
    catch{
        res.redirect('/books')
    }
})
//Create Book route
router.post('/', async (req,res) =>{
    res.send('Create Book')
})
    
//Exporting
module.exports = router