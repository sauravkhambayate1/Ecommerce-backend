import express from 'express';
const router = express.Router();

import {getMacbookDetailsController,getMacbookDetailsByIdController} from '../controllers/machbook.js'

router.get('/', getMacbookDetailsController);
router.get("/:id",getMacbookDetailsByIdController)
export default router;