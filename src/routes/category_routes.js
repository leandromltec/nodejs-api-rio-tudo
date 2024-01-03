//Acesso o recurso do controller
const router = require("express").Router()

const categoryController = require("../controllers/category_controller")

const ConstApp = require('../const/values')


router.route("/" + ConstApp.routeCategory()).get((req, res)=> categoryController.getAllCategories(req, res))


module.exports = router