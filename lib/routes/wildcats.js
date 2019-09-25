// eslint-disable-next-line new-cap
const router = require('express').Router();
const Wildcat = require('../models/wildcat');

router
  .post('/', (req, res, next) => {
    Wildcat.create(req.body)
      .then(result => res.json(result))
      .catch(next);
  })
  .get('/:id', (req, res, next) => {
    Wildcat.findById(req.params.id)
      .then(result => res.json(result))
      .catch(next);
  })
  .get('/', (req, res, next) => {
    Wildcat.find()
      .then(result => res.json(result))
      .catch(next);
  })
  .put('/:id', (req, res, next) => {
    Wildcat.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(result => res.json(result))
      .catch(next);
  });

module.exports = router;