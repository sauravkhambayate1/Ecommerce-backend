import Cart from '../models/cart.js'
export const addItemToCart = (req, res)=>{

Cart.findOne({user: req.user._id})
.exec((error, cart)=>{
   if(error) return res.status(400).json({error})
   if(cart){
     const product = req.body.cardItem.product
    const isItemAdded = cart.cartItem.find(c => c.product == req.body.cardItem.product)
     if(isItemAdded){

     }
     else{
        
     }
    Cart.findOneAndUpdate({"user": req.user_.id, "cardItem.product": product}, {
         "$set": {
           "cartItem": {
            ...req.body.cartItem,
            quantity: 1
         
         }
        }
    })
    .exec((error, _cart)=>{
        if(error) return res.status(400).json({error})
        if(cart) return res.status(201).send({cart: _cart})
        
        
        })
   }
})

const cart = new Cart({
      user: req.user._id,
      cardItem: [req.body.cartitem]
})

   cart.save((error, cart)=>{
      if(error){
        return res.status(400).send({error})
      }
      if(cart){
        return res.status(201).send({cart})
      }
   })
}