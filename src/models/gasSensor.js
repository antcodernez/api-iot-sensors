
// models/gasSensor.js

import mongoose from 'mongoose';

const gasSensorSchema = new mongoose.Schema(
  {
    gasLevel: { type: Number, required: true }
  },
  { timestamps: true }
);

const gasSensor = mongoose.model('gasSensor', gasSensorSchema);

export default gasSensor;
