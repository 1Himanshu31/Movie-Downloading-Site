const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const userRoutes = require('./Routes/userRoutes');
const movieRoutes = require('./Routes/movieRoutes');
const ratingRoutes = require('./Routes/ratingRoutes');
const downloadRoutes = require('./Routes/downloadRoutes');
const adminRoutes = require('./Routes/adminRoutes');

const app = express();

app.use(bodyParser.json());

app.use('/users', userRoutes);
app.use('/movies', movieRoutes);
app.use('/ratings', ratingRoutes);
app.use('/downloads', downloadRoutes);
app.use('/admins', adminRoutes);

mongoose.connect('mongodb://localhost:27017/moviedownload', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => 
    {
    console.log('Connected to MongoDB');
    app.listen(8521, () => 
    {
      console.log('Server is running on port 8521');
    });
  })
  .catch(err => console.error('Could not connect to MongoDB...', err));
