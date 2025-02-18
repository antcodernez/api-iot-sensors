// models/presenceSensorModel.js

import mongoose from 'mongoose';

const presenceSensorSchema = new mongoose.Schema({
  presenceDetected: { type: Boolean, required: true },
}, { timestamps: true });

const PresenceSensor = mongoose.model('PresenceSensor', presenceSensorSchema);

export default PresenceSensor;
