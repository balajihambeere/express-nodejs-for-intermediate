var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var routes = require('./src/routes/appRoutes');

var app = new express();

const PORT = 3000;

mongoose.Promise = global.Promise;

const options = { useNewUrlParser: true };

//change connection string
mongoose.connect('mongodb://oorja:oorja123@ds243812.mlab.com:43812/hambeeredb', options,
    function (error) {
        if (error) { console.log(error); }
    });

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

routes(app);

app.get('/', (req, res) =>
    res.send(`Server is running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`Server is running on port ${PORT}`)
);