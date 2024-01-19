require('dotenv').config()

//Acesso o recurso do controller
const router = require("express").Router()

const infoController = require("../controllers/info_controller")

const ConstApp = require('../const/values')


router.route("/" + process.env.ENDPOINT_INFO).get((req, res)=> infoController.getInfos(req, res))


module.exports = router