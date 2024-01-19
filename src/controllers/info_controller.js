
const InfoModel = require('../models/info_model')


const infoController = {

    getInfos : async (request, response) => {
        try{
            const infos = await InfoModel.find()
            response.json(infos)

        }catch(error){
            console.log(error)
        }
    }
    
}

module.exports = infoController