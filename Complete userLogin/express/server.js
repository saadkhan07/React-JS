const express = require('express');
const cors = require('cors');
const mongoose=require('mongoose')
const bodyParser = require('body-parser');

const User= require('./user');
const MONGODB_URI = "mongodb://127.0.0.1:27017/bookstore";




const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample route
app.get('/api', (req, res) => {
    res.json({ message: 'Hello from Eressss!' });
});

app.post('/register', async (req, res) => {
  try {
      const email = req.body.creditentails.mail;
      const password = req.body.creditentails.password;

      // Create a new user
      const user = new User({ email, password });

      // Save to database
      await user.save();
      res.status(201).send({ message: 'User registered successfully' });
  } catch (error) {
      res.status(500).send({ message: 'Server error', error });
  }
});


mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });