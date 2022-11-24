"use strict";
const path = require('path');
const express = require('express');
const app = express();
//const port = 3000;
// const { PORT = 3000 } = process.env

const morgan = require('morgan');
const engine = require('express-handlebars').engine;
const extname = require('path').extname;
const methodOverride = require('method-override');
const route = require('./src/routes');
const db = require('./src/config/db');

db.connect();
app.use(express.static(path.join(__dirname, './src/public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

app.engine('hbs', engine({
    extname: '.hbs',
    helpers: {
        sum: function (a, b) { return a + b; },
    },
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, './src/resources', 'views'));
// Routes init
route(app);

const port = process.env.port || 3000
app.listen(port, () => {
    console.log(`Example app listening on PORT ${port}`)
  })