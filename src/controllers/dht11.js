// controllers/dht11Controller.js

import Dht11 from '../models/dht11.js';

// Controller to handle POST request for DHT11 data
export const createDht11Data = async (req, res) => {
  const { temperature, humidity } = req.body;

  if (temperature == null || humidity == null) {
    return res.status(400).json({ error: 'Temperature or humidity data is missing' });
  }

  try {
    const newData = new Dht11({ temperature, humidity });
    await newData.save();
    res.status(201).json({ message: 'Data saved successfully', data: newData });
  } catch (error) {
    res.status(500).json({ error: 'Error saving data', details: error.message });
  }
};

// Controller to handle GET request for all DHT11 records
export const getAllDht11Data = async (req, res) => {
  try {
    const data = await Dht11.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data', details: error.message });
  }
};

// Controller to handle GET request for the latest DHT11 record
export const getLatestDht11Data = async (req, res) => {
  try {
    const latestData = await Dht11.findOne().sort({ timestamp: -1 });
    if (!latestData) {
      return res.status(404).json({ error: 'No data available' });
    }
    res.status(200).json(latestData);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching the latest record', details: error.message });
  }
};
