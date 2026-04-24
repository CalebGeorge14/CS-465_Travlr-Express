const express = require('express');
const path = require('path');
const hbs = require('hbs');
const cors = require('cors');

// database connection
require('./app_api/models/db');

const app = express();
const port = 3000;

// routes
const indexRouter = require('./app_server/routes/index');
const apiRouter = require('./app_api/routes/index');

// set views
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'hbs');

// register partials
hbs.registerPartials(path.join(__dirname, 'app_server', 'views', 'partials'));

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// static files
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/', indexRouter);
app.use('/api', apiRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});