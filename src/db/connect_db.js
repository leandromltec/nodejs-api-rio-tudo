require('dotenv').config()

//Definição mongoose (facilita operações para o MongoDB)
const mongoose = require('mongoose')

const ConstApp = require('../const/values')

async function main(){

    try{
        mongoose.set("strictQuery", true)
        console.log('ENVIRONMENT: ' + process.env.ENVIRONMENT);
        //String de conexão para conectar ao MongoDB
        await  mongoose.connect(process.env.CONNECT_STRING);
        
        console.log("conectado ao banco")
    }catch(erro){
        console.log(erro)
    }

}

module.exports = main