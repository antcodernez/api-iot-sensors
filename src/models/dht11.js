import mongoose from 'mongoose';

const dht11Schema = new mongoose.Schema({
  temperature: Number,
  humidity: Number
}, { timestamps: true });

const Dht11 = mongoose.model('Dht11', dht11Schema);

export default Dht11;
