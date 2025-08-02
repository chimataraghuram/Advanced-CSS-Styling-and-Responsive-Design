// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./models/User');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

mongoose.connect('mongodb://127.0.0.1:27017/smartformDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post('/submit', async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.redirect('/');
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
