const path = require('path');
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

app.use(morgan('dev')); //logging middleware
app.use(express.static(path.join(__dirname, '../public')));  //serving static assets
app.use(bodyParser.json()); //returns middleware that only parses json
app.use(bodyParser.urlencoded({ extended: true })) //returns middleware that parses url encoded bodies

app.use('/api', require('./api')) //route to apis

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

// error handling endware, 500 errors
app.use(function (err, req, res, next) {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
});

//start server and listen for requests
app.listen(port, function () {
    console.log("Knock, knock");
    console.log("Who's there?");
    console.log(`Your server, listening on port ${port}`);
  });