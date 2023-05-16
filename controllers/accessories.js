// const Accesories = require('../models/accesories')
import Accesories from '../models/accessories.js'

const getAccesoriesDetailsController = (req,res) =>{
    try{
        Accesories.find({}).then((data) => {
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

const getAccesoriesDetailsByIdController = (req,res) =>{
    const id = req.params.id;
    if(id){
        Accesories.findOne({id}).then(data =>{
        if(data){
            res.status(200).json({
                message : "success",
                accesories : data
            })
        }else{
            res.status(401).json({
                message : "failed",
                accesories : {}
            })
        }
       }).catch(err =>{
        res.status(401).json({
            message : "failed",
            accesories : {}
        })
       })
    
    }else{
        res.status(401).json({
            message : "failed",
            accesories : {}
        })
    }
}

export  {getAccesoriesDetailsController,getAccesoriesDetailsByIdController};