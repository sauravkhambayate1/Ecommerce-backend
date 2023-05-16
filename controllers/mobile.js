
import Mobile from '../models/mobile.js'

const getMobileDetailsController = (req,res) =>{
    try{
        Mobile.find({}).then((data) => {
        res.status(200).json({
            message : "success",
            details : data
        })
    }).catch(err =>{
        res.status(500).json({
            message : err,
            details : []
        })
    })
    }catch(err){
        res.status(500).json({
            message : err,
            details : []
        })
    }
};

const getMobileDetailsByIdController = (req,res) =>{
    const id = req.params.id;
    if(id){
        Mobile.findOne({id}).then(data =>{
        if(data){
            res.status(200).json({
                message : "success",
                mobile : data
            })
        }else{
            res.status(401).json({
                message : "failed",
                mobile : {}
            })
        }
       }).catch(err =>{
        res.status(401).json({
            message : "failed",
            mobile : {}
        })
       })
    
    }else{
        res.status(401).json({
            message : "failed",
            mobile : {}
        })
    }
}

export {getMobileDetailsController,getMobileDetailsByIdController};