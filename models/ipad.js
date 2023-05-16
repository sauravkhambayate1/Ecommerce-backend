import mongoose from 'mongoose';
const Schema = mongoose.Schema;

import ipad from '../utility/ipad.js'

const ipadSchema = new Schema({
    id :  Number,
    category : String,
    name : String,
    ratting : String,
    image : String,
    price : String,
    oPrice : String,
    quantity : String
})

const Ipad = mongoose.model('Ipad',ipadSchema)


// Ipad.create(...ipad).then(() => console.log("Added"))
export default Ipad;