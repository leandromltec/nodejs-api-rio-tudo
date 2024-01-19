require('dotenv').config()

//Acesso o recurso do controller
const router = require("express").Router()

const influencerController = require("../controllers/influencer_controller")

const ConstApp = require('../const/values')


router.route("/" + process.env.ENDPOINT_INFLUENCER).get((req, res)=> influencerController.getAllInfluencers(req, res))


module.exports = router