const FavoritesModel = require('../models/favorites_model')


const favoritesController = {

    getFavorites : async (request, response) => {
        try{
            const favorites = await FavoritesModel.find()
            
            response.json(favorites)

        }catch(error){
            console.log(error)
        }
    }
    
}

module.exports = favoritesController