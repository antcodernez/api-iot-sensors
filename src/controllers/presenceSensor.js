// controllers/presenceSensor.js

import PresenceSensor from '../models/presenceSensor.js';

export const createPresenceData = async (req, res) => {
  const { presenceDetected } = req.body;

  if (presenceDetected == null) {
    return res.status(400).json({ error: 'Missing presence detection data' });
  }

  try {
    const presenceData = new PresenceSensor({ presenceDetected });
    await presenceData.save();
    res.status(201).json({ message: 'Presence data saved successfully', data: presenceData });
  } catch (error) {
    res.status(500).json({ error: 'Error saving presence data', details: error.message });
  }
};

export const getAllPresenceData = async (req, res) => {
  try {
    const data = await PresenceSensor.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving presence data', details: error.message });
  }
};

export const getLatestPresenceData = async (req, res) => {
  try {
    const latestData = await PresenceSensor.findOne().sort({ createdAt: -1 });
    if (!latestData) {
      return res.status(404).json({ error: 'No presence data available' });
    }
    res.status(200).json(latestData);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving latest presence data', details: error.message });
  }
};

export const getPresenceById = async (req, res) => {
  const { id } = req.params;

  try {
    const presenceData = await PresenceSensor.findById(id);
    if (!presenceData) {
      return res.status(404).json({ error: 'Presence data not found' });
    }
    res.status(200).json(presenceData);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving presence data by ID', details: error.message });
  }
};

export const deletePresenceById = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedData = await PresenceSensor.findByIdAndDelete(id);
    if (!deletedData) {
      return res.status(404).json({ error: 'Presence data not found' });
    }
    res.status(200).json({ message: 'Presence data deleted successfully', data: deletedData });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting presence data', details: error.message });
  }
};
