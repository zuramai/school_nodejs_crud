const routes = require('./routes');
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use('/', routes);
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.listen(port, () => console.log('App running on port '+port))
