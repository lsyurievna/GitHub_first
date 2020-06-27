// Import exress library
const express = require('express')
const app = express()
//Import layout package
const expressLayouts = require('express-ejs-layouts')
//Require Router
const indexRouter = require('./routes/index')

//Now we can start configuring the express app
//Setting the view engine
app.set('view engine', 'ejs')
//Setting where views are coming from 
app.set('views', __dirname + '/views')
//Hooking up express layouts 
app.set('layout', 'layouts/layout')
//Saying that we want to use express layouts
app.use(expressLayouts)
//Sayong where public stuff is goint to be
app.use(express.static('public'))
app.use('/', indexRouter)

app.listen(process.env.PORT || 3000)