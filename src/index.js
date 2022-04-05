const express = require('express')
const path = require('path')
const morgan = require('morgan')
const {engine} = require('express-handlebars')
const app = express()
const port = 8888
app.use(express.static(path.join(__dirname,'public')))
app.use(morgan('combined'))
//routes
const route = require('./routes')
//
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.engine('hbs', engine({extname: '.hbs'}))
app.set('view engine','hbs')
app.set('views',path.join(__dirname,'resource/views'))
route(app)
app.listen(port, () => console.log(`Server running on port ${port} 🔥`));