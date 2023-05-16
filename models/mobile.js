import mongoose  from "mongoose";
const Schema = mongoose.Schema;


const mobileSchema = new Schema({
    id :  Number,
    category : String,
    name : String,
    ratting : String,
    image : String,
    price : String,
    oPrice : String,
    quantity : String
})

const Mobile = mongoose.model('Mobile',mobileSchema)


// Mobile.create(...mobile).then(() => console.log("Added"))
export default Mobile;