//Carregando módulos
const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()



//Config EXPRESS
const app = express()
app.use(
    express.urlencoded({
        extended:true
    }))

app.use(express.json())


//Config EXPRESS-VALIDATOR




//Carrega Router
const personRoutes = require('./src/routes/personRoutes')
app.use('/person',personRoutes)




//Conecta mongoDb
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.8temdef.mongodb.net/?retryWrites=true&w=majority`).then(
    console.log('Conectado ao MongoDB')
    ).catch((err) => {
        console.log('Ocorreu um erro' + err)
    })





//Listen port
const port = 3000
app.listen(port)


