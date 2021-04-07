var express = require('express');                             //Módulo para requisição de páginas e subir servidor
var consign = require('consign');                             //Módulo para fazer loop em um diretório
var bodyParser = require('body-parser')
var expressValidator = require('express-validator')           //Módulo para validação de campos

var app = express();
app.set('view engine', 'ejs')
app.set('views', './app/views')

app.use(express.static('./app/public'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(expressValidator())



consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .then('app/models')
    .then('app/controllers')
    .into(app)


module.exports = app;