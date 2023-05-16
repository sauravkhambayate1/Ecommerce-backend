import mongoose from "mongoose"
const cartSchema = new  mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId, 
        ref:"User",
        required: true,
        trim: true
    },
    cardItem:[
       {
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true,
            trim: true

        } ,
        quantity: {type:Number, default:1},
        price: {type:Number, required: true}
       }
    ]
   
})

export default mongoose.model("Cart", cartSchema)