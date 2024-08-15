const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const env = process.env;
const mongoose = require('mongoose');

mongoose.connect(env.MONGOURL || 'mongodb://localhost:27017/ll', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));


app.get('/', (req, res) => {
  res.send('Hello World!');
});


module.exports = app;
// The app object is an instance of express. We define a route handler / that sends the string Hello World! to the client. We make the app listen on port 3000. If we run this code with node index.js, the app will be running on http://localhost:3000.