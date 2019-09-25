require('dotenv').config();
require('./lib/connect')();
const express = require('express');
const app = express();
const Wildcat = require('./lib/models/wildcat');

app.use(express.json());

app.get('/api/wildcats', (req, res, next) => {
  Wildcat.find()
    .then(wildcats => {
      res.json(wildcats);
    })
    .catch(next);
});

app.get('/api/wildcats/:id', (req, res, next) => {
  Wildcat.findById(req.params.id)
    .then(wildcat => {
      res.json(wildcat);
    })
    .catch(next);
});

app.post('/api/wildcats', (req, res, next) => {
  Wildcat.create(req.body)
    .then(wildcat => {
      res.json(wildcat);
    })
    .catch(next);
});

app.put('/api/wildcats/:id', (req, res, next) => {
  Wildcat.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  )
    .then(wildcat => {
      res.json(wildcat);
    })
    .catch(next);
});

app.delete('/api/wildcats/:id', (req, res, next) => {
  console.log(req.params.id);
  Wildcat.findByIdAndDelete(req.params.id)
    .then(removed => {
      console.log(removed);
      res.json(removed);
    })
    .catch(next);
});

app.listen(3000, () => console.log('server running on 3000'));