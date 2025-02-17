// routes/dht11Routes.js
import express from 'express';

import { createDht11Data, getAllDht11Data, getLatestDht11Data } from '../controllers/dht11.js';

const router = express.Router();

// Endpoint to receive data from DHT11
router.post('/', createDht11Data);

// Get all records
router.get('/', getAllDht11Data);

// Get the latest record
router.get('/latest', getLatestDht11Data);

export default router;
