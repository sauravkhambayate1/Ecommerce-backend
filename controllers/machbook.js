
import Macbook from '../models/machbook.js'

const getMacbookDetailsController = (req,res) =>{
    try{
        Macbook.find({}).then((data) => {
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

const getMacbookDetailsByIdController = (req,res) =>{
    const id = req.params.id;
    if(id){
        Macbook.findOne({id}).then(data =>{
        if(data){
            res.status(200).json({
                message : "success",
                macbook : data
            })
        }else{
            res.status(401).json({
                message : "failed",
                macbook : {}
            })
        }
       }).catch(err =>{
        res.status(401).json({
            message : "failed",
            macbook : {}
        })
       })
    
    }else{
        res.status(401).json({
            message : "failed",
            macbook : {}
        })
    }
}
export {getMacbookDetailsController,getMacbookDetailsByIdController};