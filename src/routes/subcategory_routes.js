require('dotenv').config()

//Acesso o recurso do controller
const router = require("express").Router()

const subCategoryController = require("../controllers/subcategory_controller")

const ConstApp = require('../const/values')

router.route("/" + process.env.ENDPOINT_SUBCATEGORY).get((req, res)=> subCategoryController.getSubCategory(req, res))


module.exports = router