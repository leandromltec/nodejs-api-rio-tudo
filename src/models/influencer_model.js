const mongoose  = require("mongoose");

//Padrão do model
const { Schema } = mongoose;

//Nomenclaturar - nome do model seguido de Schema
const influencerSchema =  new Schema(
    {
        //Propriedades dd oModel
        titleInfluencer: String,   
    },
    {
        collection: 'influencers'
    }

)


const Influencer = mongoose.model("Influencer", influencerSchema, 'influencers')

module.exports = Influencer