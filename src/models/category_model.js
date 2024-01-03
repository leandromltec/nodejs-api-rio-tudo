const mongoose  = require("mongoose");

//Padrão do model
const { Schema } = mongoose;

//Nomenclaturar - nome do model seguido de Schema
const categorySchema =  new Schema(
    {
        //Propriedades dd oModel
        title: String,   
    },
    {
        collection: 'categories'
    }

    //Salva data de criação e atualização do model
    //{ timestamps: true}
)


const Category = mongoose.model("Category", categorySchema, 'categories')

//Exporta o model Category
module.exports = Category