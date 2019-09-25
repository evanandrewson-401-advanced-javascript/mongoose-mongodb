const express = require('express');
const app = express();

// middleware
const morgan = require('morgan');
const checkConnection = require('./middleware/check-connection');
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('public'));

// test route
app.get('/hello', (req, res) => {
  res.send('test route works');
});

app.use(checkConnection);
// API ROUTES
const wildcats = require('./routes/wildcats');
// app.use('/api/wildcats', wildcats);

// NOT FOUND

// ERRORS

module.exports = app;