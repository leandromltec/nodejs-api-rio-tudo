
require('dotenv').config()

const router = require("express").Router()

const favoritesController = require("../controllers/favorites_controller")

const ConstApp = require('../const/values')


router.route("/" + process.env.ENDPOINT_FAVORITES).get((req, res)=> favoritesController.getFavorites(req, res))


module.exports = router