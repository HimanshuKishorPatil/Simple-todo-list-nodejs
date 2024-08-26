const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const taskRoutes = require('./routes/taskRoutes');
const errorHandler = require('./middlewares/errorHandler');

dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.error(err));

app.use('/api', taskRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});