const express = require('express');
const router = express.Router();
const path = require('path');
const ejs = require('ejs');
const bodyParser = require('body-parser');

//instantiate express
const app = express();

//routes
const index = require('./routes/index');
const names = require('./routes/names');

//Set views directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Implement middleware
app.use(bodyParser.urlencoded({ extended: false }));

//Establish routes
//"when the app receives '/names' as a path extension, refer it to the names route"
//!!this ordering is crucial!
app.use('/names', names);
app.use('/*', function(req, res, next){
  res.redirect('/names')
});


// app.get('/', (req, res) => {
//   res.render('index',
//   // { data to pass to index }
// )
// })

const port = 8080;
app.listen(8080, console.log(`listening on port ${port}`));
