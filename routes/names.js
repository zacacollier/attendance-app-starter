const express = require('express');
const _ = require('lodash')
const router = express.Router();

// const names = ['cartman', 'sChopEnhAuer', 'FENSTER', 'ångStröm'];

const names = {
  'cartman': 1,
  'Zac': 1,
  'negligeé-miller': 1,
  'FENSTER': 1,
  'ångStröm': 1
}

function inputScrub(str) {
  return str.replace(/[^-\s]+/g, function(txt) {
    return txt.charAt(0).toUpperCase()
         + txt.substr(1).toLowerCase();
  });
}

//apply input scrubbing to initial value of 'names'
const namesArray = Object.keys(names);
const scrubArray = namesArray.map(function(name) {
	return inputScrub(name);
});
const scrubObject = scrubArray.reduce(function(object, value, i) {
	object[i] = value;
	return object;
}, {});

//GET routing
router.get('/', function(req, res, next) {
  res.render('names.ejs', { scrubArray, scrubObject });
});

//POST routing
router.post('/', function(req, res, next) {
  const name = inputScrub(req.body.name);

  if (scrubObject[name]) {
    scrubObject[name]++
  }
  else scrubObject[name] = 1;

  res.redirect('/names');
})
module.exports = router;
