import express from 'express';
import dht11Router from './dht11.js';

const router = express.Router();

router.use('/dht11', dht11Router);

export default router;
