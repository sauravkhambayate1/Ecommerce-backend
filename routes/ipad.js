import express from 'express'
const router = express.Router();
import {getIpadDetailsController,getIpadDetailsByIdController} from '../controllers/ipad.js'
router.get('/', getIpadDetailsController);
router.get("/:id",getIpadDetailsByIdController)

export default router;