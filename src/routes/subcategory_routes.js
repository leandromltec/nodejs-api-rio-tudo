
//Acesso o recurso do controller
const router = require("express").Router()

const subCategoryController = require("../controllers/subcategory_controller")

const ConstApp = require('../const/values')

router.route("/" + ConstApp.routeCategorySubCategory()).get((req, res)=> subCategoryController.getSubCategory(req, res))


module.exports = router