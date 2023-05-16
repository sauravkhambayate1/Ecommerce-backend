import express  from "express";
import {registerController, loginController, testController} from "../controllers/authController.js";
import { isAdmin, requireSignIn, userMiddleware } from "../middlewares/authMiddleware.js";
// import { addItemToCart } from "../controllers/cartController.js";

const router  = express.Router()

router.post('/register', registerController)

// Login Route
router.post('/login', loginController)

// test Routes
router.get('/test',requireSignIn, isAdmin,  testController)

// Protected routes
router.get('/user-auth', requireSignIn, (req, res)=>{
    res.status(200).send({ok:true})
})



export default router