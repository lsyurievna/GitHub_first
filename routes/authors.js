const express = require('express')
const Author = require('../models/author')
const router = express.Router()
//All Authors route
router.get('/', (req,res)=> {
    res.render('authors/index')
})
//New Author route
router.get('/new', (req, res) => {
    res.render('authors/new', {author : new Author()})
})
//Create Author route
router.post('/', async (req,res) =>{
    const author = new Author({
        name: req.body.name
    })

    try {
        const newAuthor = await author.save()
        //res.redirect(`authors/${newAuthor.id}`)
        res.redirect(`authors`)
    } catch {
        res.render('authors/new', {
            author:author,
            errorMessage: 'Error creating author'
        })
    }
})
    
//Exporting
module.exports = router