//Definição do express
const express = require('express')

const cors = require('cors')

//Definição mongoose (facilita operações para o MongoDB)
const mongoose = require('mongoose')

//Instância do express
const app = express()

//app.use(cors)

//Leitura de requisição em json
app.use(express.json())
//Instância do banco de dados
const connectDB = require('./db/connect_db.js')



connectDB()

//Routes
const routes = require("./routes/router")

app.use("/", routes)

/*app.get('/', (req, res)=> {
    res.send('teste')
})*/

const port = 4000;


//Aplicação fica escutando a porta definida
app.listen(port, ()=> {
   
   
    console.log('app ok')
})