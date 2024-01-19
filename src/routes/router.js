const router = require("express").Router()

//Rota de categorias 
const routes = [ require("./category_routes"),
require("./subcategory_routes"),
require("./influencer_routes"),
require("./info_routes"),
require("./favorites_routes"),

 ];


router.use("/", routes)

module.exports = router;