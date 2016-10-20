const express = require('express');
const router = express.Router();

const names = ['cartman', 'sChopEnhAuer', 'FENSTER', 'ångStröm'];

function inputScrub(str) {
  return str.replace(/[^-\s]+/g, function(txt) {
    return txt.charAt(0).toUpperCase()
         + txt.substr(1).toLowerCase();
  });
}

//apply input scrubbing to initial value of 'names'
const namesScrubbed = names.map(function(name) {
	return inputScrub(name);
});

router.get('/', function(req, res, next) {
  res.render('names.ejs', { namesScrubbed, count: 1 });
});

//apply input scrubbing to incoming form input:
router.post('/', function(req, res, next) {
  const name = inputScrub(req.body.name);
  // this.count = 1;

  for (const index of namesScrubbed) {
    if (name === index) {
      console.log(name, this.count)
      this.count += 1;
      console.log(name, this.count)
    };
    if (!namesScrubbed.includes(name)) {
      namesScrubbed.push(name);
    }
  }

  res.redirect('/names');
})
module.exports = router;
