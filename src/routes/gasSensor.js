// routes/gasSensorRoutes.js

import express from 'express';
import { createGasSensorData, getAllGasData, getLatestGasData } from '../controllers/gasSensor.js';

const router = express.Router();

router.post('/', createGasSensorData);

router.get('/', getAllGasData);

router.get('/latest', getLatestGasData);

export default router;
