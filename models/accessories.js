
import mongoose from 'mongoose'
const Schema = mongoose.Schema;
// import accesories from '../utility/accessories.js';


const accesoriesrSchema = new Schema({
    id :  Number,
    category : String,
    name : String,
    ratting : String,
    image : String,
    price : String,
    oPrice : String,
    quantity : String
})

const Accesories = mongoose.model('Accesories',accesoriesrSchema)


// Accesories.create(...accesories).then(() => console.log("Added"))
export default Accesories;