const routes = require('./routes');
const express = require('express');
const app = express();
const port = 3000;
app.use('/', routes);

app.listen(port, () => console.log('App running on port '+port))
