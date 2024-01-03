const mongoose  = require("mongoose");

const { Schema } = mongoose;


const categorySchema =  new Schema(
  {
      //Propriedades dd oModel
      idSubCategory: String,   
  },
  {
      collection: 'subcategories'
  }

  //Salva data de criação e atualização do model
  //{ timestamps: true}
)


const SubCategory = mongoose.model("Subcategory", categorySchema, 'subcategories')

//Exporta o model Category
module.exports = SubCategory