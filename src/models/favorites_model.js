const mongoose  = require("mongoose");

const { Schema } = mongoose;

const favoritesSchema =  new Schema(
    {
       
      titleNoFavorites: String,   
    },
    {
        collection: 'favorites'
    }

)


const Favorites = mongoose.model("Favorites", favoritesSchema, 'favorites')

module.exports = Favorites