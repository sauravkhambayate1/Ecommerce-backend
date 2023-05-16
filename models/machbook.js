
import mongoose from 'mongoose'
const Schema = mongoose.Schema;
// import macbook from '../utility/macbook'


const macbookSchema = new Schema({
    id :  Number,
    category : String,
    name : String,
    ratting : String,
    image : String,
    price : String,
    oPrice : String,
    quantity : String
})

const Macbook = mongoose.model('Macbook',macbookSchema)


// Macbook.create(...macbook).then(data => console.log("sdsd"));
export default Macbook;