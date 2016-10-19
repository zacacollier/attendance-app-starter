const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.sendFile('index', { names: ['Mike', 'Buzbee', 'Schopenhauer', 'Cambro']})
});

module.exports = router;
