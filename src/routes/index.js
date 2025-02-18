import express from 'express';

import dht11Router from './dht11.js';
import windowDoor from './windowDoor.js'


const router = express.Router();

router.use('/dht11', dht11Router);
router.use('/window-door', windowDoor);

export default router;
