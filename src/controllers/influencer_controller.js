const InfluencerModel = require('../models/influencer_model')


const influencerController = {

    getAllInfluencers : async (request, response) => {
        try{
            const allInfluencers = await InfluencerModel.find()
            
            response.json(allInfluencers)

        }catch(error){
            console.log(error)
        }
    }
    
}

module.exports = influencerController