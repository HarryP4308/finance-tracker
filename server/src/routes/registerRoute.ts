import express from 'express';
import { register } from '../controllers/registerController';

const router = express.Router();

// Register route
router.post('/', register);

export default router;
