import express from "express"
const router = express.Router();
import {getMobileDetailsController,getMobileDetailsByIdController} from '../controllers/mobile.js'

router.get('/', getMobileDetailsController);
router.get("/:id",getMobileDetailsByIdController)

export default router;