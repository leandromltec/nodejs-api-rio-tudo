const router = require("express").Router()

//Rota de categorias 
const categoryRouter = [ require("./category_routes"),
require("./subcategory_routes")

 ];



router.use("/", categoryRouter)

module.exports = router;