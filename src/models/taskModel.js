// importing mongodb
const mongoose = require('mongoose');

// create task body blueprint 
const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  status: { type: String, enum: ["pending", "in-progress", "completed"], default: "pending" },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

taskSchema.pre('save', function (next) {
  this.updated_at = Date.now();
  next();
});

// object creation
const Task = mongoose.model('Task', taskSchema);

module.exports = Task;

