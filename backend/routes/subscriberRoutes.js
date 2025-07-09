import express from 'express';
import { createSubscriber, getSubscribers } from '../controllers/subscriberController.js';
const router = express.Router();

router.post('/', createSubscriber);
router.get('/', getSubscribers);

export default router;
