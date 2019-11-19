var express = require('express');
const bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
const routes = require('./routes')
app.listen(3000, () => {
    console.log("listeneing at 3000");
});

app.use(routes);
module.exports = app;