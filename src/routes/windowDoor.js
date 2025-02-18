// routes/doorWindowRoutes.js

import express from 'express';
import { 
  createDoorWindow, 
  updateDoorWindow, 
  deleteDoorWindow, 
  getAllDoorWindows, 
  getDoorWindowById 
} from '../controllers/windowDoor.js';

const router = express.Router();

// Route to create a new DoorWindow
router.post('/', createDoorWindow);

// Route to update a DoorWindow by ID
router.patch('/:id', updateDoorWindow);

// Route to delete a DoorWindow by ID
router.delete('/:id', deleteDoorWindow);

// Route to get all DoorWindows
router.get('/', getAllDoorWindows);

// Route to get a DoorWindow by ID
router.get('/:id', getDoorWindowById);

export default router;
