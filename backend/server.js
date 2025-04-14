const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const path = require('path'); // <-- 🔥 Add this line
const app = express();
dotenv.config();
const PORT = 3000;

const todoRoutes = require('./routes/todo');
const signupRoutes = require('./routes/signup');
const loginRoutes = require('./routes/login');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));



mongoose.connect('mongodb://localhost:27017/todoApp')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB', err));

app.use('/api/todo',todoRoutes);
app.use('/api/signup',signupRoutes);
app.use('/api/login',loginRoutes);
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')));
  
    app.get('/*', (req, res) => {
      res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
    });
  }
  
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});