const express = require('express');
const router = express.Router();

//all this index does is redirect to names.js
router.get('/', function(req, res, next){
  res.redirect('/names')
});

module.exports = router;
