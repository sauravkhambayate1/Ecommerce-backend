import express from 'express'
const router = express.Router();
import {getAccesoriesDetailsController,getAccesoriesDetailsByIdController} from '../controllers/accessories.js'
// const {getAccesoriesDetailsController,getAccesoriesDetailsByIdController} = require('../constrollers/accesories');

router.get('/', getAccesoriesDetailsController);
router.get("/:id",getAccesoriesDetailsByIdController)

export default router