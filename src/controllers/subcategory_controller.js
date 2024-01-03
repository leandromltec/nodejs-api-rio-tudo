const SubCategoryModel = require('../models/subcategory_model')

const subCategoryController = {

  getSubCategory : async (request, response) => {
      try{
        
          const subCategory = request.params.idSubCategory;
          const service = await SubCategoryModel.findOne({ "idSubCategory": subCategory});

          response.json(service)

      }catch(error){
          console.log(error)
      }
  }
  
}

module.exports = subCategoryController