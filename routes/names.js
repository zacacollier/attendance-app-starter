const express = require('express');
const router = express.Router();

const names = ['Cartman', 'Buzbee', 'Schopenhauer', 'fenster', 'ångStröm'];

function inputScrubber(str) {
  return str.replace(/[^-\s]+/g, function(txt) {
    return txt.charAt(0).toUpperCase()
         + txt.substr(1).toLowerCase();
  });
}

const namesScrubbed = names.map(function(name) {
	return inputScrubber(name)
});

router.get('/', function(req, res, next) {
  res.render('names.ejs', { namesScrubbed })
});

router.post('/', function(req, res, next) {
  console.log(req.body);
  function inputScrubber(str) {
  	return str.replace(/[^-\s]+/g, function(txt) {
  		return txt.charAt(0).toUpperCase()
  			   + txt.substr(1).toLowerCase();
  	});
  }
  const name = inputScrubber(req.body.name);
  namesScrubbed.push(name);
  console.log(namesScrubbed.includes(name));
  // if (names.includes(name))  {
  //
  // }

  res.redirect('/names');
})
module.exports = router;
