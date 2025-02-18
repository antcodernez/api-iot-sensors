import express from 'express';

import dht11Router from './dht11.js';
import windowDoorRouter from './windowDoor.js'
import gasSensorRouter from './gasSensor.js'
import presenceSensorRouter from './presenceSensor.js'

const router = express.Router();

router.use('/dht11', dht11Router);
router.use('/window-door', windowDoorRouter);
router.use('/gas-sensor', gasSensorRouter);
router.use('/presencesensor', presenceSensorRouter);

export default router;
