
const CategoryModel = require('../models/category_model')


const categoryController = {

    getAllCategories : async (request, response) => {
        try{
            const allCategories = await CategoryModel.find()
            console.log(allCategories)

            response.json(allCategories)

        }catch(error){
            console.log(error)
        }
    }
    
}

module.exports = categoryController