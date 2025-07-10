import express from 'express';
import { createClient, getClients } from '../controllers/clientController.js';
import { upload } from '../middleware/upload.js';

const router = express.Router();

router.post('/', upload.single('image'), createClient); // ✅ with multer
router.get('/', getClients);

export default router;
