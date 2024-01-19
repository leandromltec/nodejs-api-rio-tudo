const mongoose  = require("mongoose");

//Padrão do model
const { Schema } = mongoose;


const infoSchema =  new Schema(
    {
       
      titleInfo: String,   
    },
    {
        collection: 'infos'
    }

    //Salva data de criação e atualização do model
    //{ timestamps: true}
)


const Infos = mongoose.model("Infos", infoSchema, 'infos')

//Exporta o model Category
module.exports = Infos