// routes/presenceSensorRoutes.js

import express from 'express';
import {
  createPresenceData,
  getAllPresenceData,
  getLatestPresenceData,
  getPresenceById,
  deletePresenceById
} from '../controllers/presenceSensor.js';

const router = express.Router();

router.post('/', createPresenceData);

router.get('/', getAllPresenceData);

router.get('/latest', getLatestPresenceData);

router.get('/:id', getPresenceById);

router.delete('/:id', deletePresenceById);

export default router;
