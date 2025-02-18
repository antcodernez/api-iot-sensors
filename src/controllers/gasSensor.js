// controllers/gasSensorController.js

import GasSensor from '../models/gasSensor.js';

// Controller to create a new gas log
export const createGasSensorData = async (req, res) => {
 const { gasLevel } = req.body;

 if (gasLevel == null) {
 return res.status(400).json({ error: 'Missing gas level data' });
 }

 try {
 const gasData = new GasSensor({ gasLevel });
 await gasData.save();
 res.status(201).json({ message: 'Gas data saved successfully', data: gasData });
 } catch (error) {
 res.status(500).json({ error: 'Error saving gas data', details: error.message });
 }
};

// Controller to get all gas data
export const getAllGasData = async (req, res) => {
 try {
 const gasData = await GasSensor.find();
 res.status(200).json(gasData);
 } catch (error) {
 res.status(500).json({ error: 'Error retrieving gas data', details: error.message });
 }
};

// Controller to get the latest gas data
export const getLatestGasData = async (req, res) => {
 try {
 const latestGasData = await GasSensor.findOne().sort({ timestamp: -1 });
 if (!latestGasData) {
 return res.status(404).json({ error: 'No gas data available' });
 }
 res.status(200).json(latestGasData);
 } catch (error) {
 res.status(500).json({ error: 'Error retrieving latest gas data', details: error.message });
 }
};