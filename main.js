const express = require('express');
const bodyParser = require('body-parser');

/*
* API server
*/

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// port setup
const port = process.env.PORT || '3000';
app.set('port', port);

// error handling
app.use(function (err, req, res, next) {
    if (err) {

    }
});

// no HTTP server for this one

app.listen(port, (err) => {
    if (err) {

    }

    console.log(`Kawaii-chan Bot running on port ${port}`);
});