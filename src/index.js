//Definição do express
const express = require('express')

//Definição mongoose
const mongoose = require('mongoose')

//String de conexão para conectar ao MongoDB
mongoose.connect(ConstApp.connectionString)

//Instância do express
const app = express()

//Porta que a aplicação será executada
const port = 3000

//Requisição do tipo get
app.get('/', (request, response)=> {
    response.send('teste')
})

//Aplicação fica escutando a porta definida
app.listen(port, ()=> {
    console.log('app ok')
})