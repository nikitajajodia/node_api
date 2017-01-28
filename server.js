const express        = require('express');
const mongoose       = require('mongoose');
const bodyParser     = require('body-parser');
const app            = express();
const config         = require('./config');

app.use(bodyParser.urlencoded({ extended: true }));

// your app will be running at this port
const port = process.env.PORT || config.port;

// connect to your mongo database
mongoose.connect(config.url);

// import the routes
require('./routes')(app, {});

app.listen(port, () => {
  console.log('We are live on ' + port);
});