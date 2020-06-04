var express = require( 'express' )
var app = express()
var port = process.env.PORT || 3000

const path = require('path')


const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, '.', 'public')))
app.use(express.static(path.join(__dirname,'.','node_modules')))

const api = require('./routes/api')
app.use('/', api)

app.listen( port, () => console.log( `App listening on port ${port}!`) )