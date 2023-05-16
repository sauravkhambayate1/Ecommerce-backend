
import Ipad from '../models/ipad.js'

const getIpadDetailsController = (req,res) =>{
    try{
        Ipad.find({}).then((data) => {
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

const getIpadDetailsByIdController = (req,res) =>{
    const id = req.params.id;
    if(id){
        Ipad.findOne({id}).then(data =>{
        if(data){
            res.status(200).json({
                message : "success",
                ipad : data
            })
        }else{
            res.status(401).json({
                message : "failed",
                ipad : {}
            })
        }
       }).catch(err =>{
        res.status(401).json({
            message : "failed",
            ipad : {}
        })
       })
    
    }else{
        res.status(401).json({
            message : "failed",
            ipad : {}
        })
    }
}

export {getIpadDetailsController,getIpadDetailsByIdController};