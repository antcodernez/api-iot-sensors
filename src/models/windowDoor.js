// models/doorWindow.js

import mongoose from 'mongoose';

const doorWindowSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    isOpen: { type: Boolean, required: true },
    type: { 
      type: String, 
      enum: ['door', 'window'],
      required: true 
    }
  },
  { timestamps: true }
);

const DoorWindow = mongoose.model('DoorWindow', doorWindowSchema);

export default DoorWindow;
