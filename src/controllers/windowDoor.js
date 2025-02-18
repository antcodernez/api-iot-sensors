// controllers/doorWindowController.js

import DoorWindow from '../models/windowDoor.js';

// Controller to create a new DoorWindow
export const createDoorWindow = async (req, res) => {
  const { id, isOpen, type } = req.body;

  if (!id || isOpen == null || !type) {
    return res.status(400).json({ error: 'Missing data: id, isOpen, or type' });
  }

  try {
    const doorWindow = new DoorWindow({ id, isOpen, type });
    await doorWindow.save();
    res.status(201).json({ message: 'Object created successfully', data: doorWindow });
  } catch (error) {
    res.status(500).json({ error: 'Error creating object', details: error.message });
  }
};

// Controller to update the state of a DoorWindow by ID
export const updateDoorWindow = async (req, res) => {
  const { id } = req.params;
  const { isOpen, type } = req.body;

  if (isOpen == null || !type) {
    return res.status(400).json({ error: 'Missing data: isOpen or type' });
  }

  try {
    const doorWindow = await DoorWindow.findOneAndUpdate(
      { id },
      { isOpen, type },
      { new: true }
    );

    if (!doorWindow) {
      return res.status(404).json({ error: 'Object not found' });
    }

    res.status(200).json({ message: 'Object updated successfully', data: doorWindow });
  } catch (error) {
    res.status(500).json({ error: 'Error updating object', details: error.message });
  }
};

// Controller to delete a DoorWindow by ID
export const deleteDoorWindow = async (req, res) => {
  const { id } = req.params;

  try {
    const doorWindow = await DoorWindow.findOneAndDelete({ id });

    if (!doorWindow) {
      return res.status(404).json({ error: 'Object not found' });
    }

    res.status(200).json({ message: 'Object deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting object', details: error.message });
  }
};

// Controller to get all DoorWindows
export const getAllDoorWindows = async (req, res) => {
  try {
    const doorWindows = await DoorWindow.find();
    res.status(200).json(doorWindows);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving objects', details: error.message });
  }
};

// Controller to get a DoorWindow by ID
export const getDoorWindowById = async (req, res) => {
  const { id } = req.params;

  try {
    const doorWindow = await DoorWindow.findOne({ id });

    if (!doorWindow) {
      return res.status(404).json({ error: 'Object not found' });
    }

    res.status(200).json(doorWindow);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving object', details: error.message });
  }
};
