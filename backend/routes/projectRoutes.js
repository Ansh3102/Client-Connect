import express from 'express';
import { createProject, getProjects } from '../controllers/projectController.js';
import { upload } from '../middleware/upload.js';

const router = express.Router();

router.post('/', upload.single('image'), createProject);
router.get('/', getProjects);

export default router;