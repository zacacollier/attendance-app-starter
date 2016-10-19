const express = require('express');
const router = express.Router();
const path = require('path');
const ejs = require('ejs');

//instantiate express
const app = express();

//routes
const index = require('./routes/index');
const names = require('./routes/names');

//Set views directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Establish routes
//"when the app receives '/names' as a path extension, refer it to the names route"
app.use('/', index);
app.use('/names', names);

// app.get('/', (req, res) => {
//   res.render('index',
//   // { data to pass to index }
// )
// })

const port = 1337;
app.listen(1337, console.log(`listening on port ${port}`));
