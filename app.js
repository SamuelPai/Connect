var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var db = require("./models");

var usersRouter = require('./routes/Members/Members.router');
var tripRouter = require('./routes/trips/Trips.router');
var activityRouter = require('./routes/Activity/Activity.router');
var indexRouter = require('./routes/index');

var app = express();
// SETUP CORS
app.options('*', cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client/build')));

app.use('/api/users', usersRouter);
app.use('/api/trips', tripRouter);
app.use('/api/activities', activityRouter);
app.use('/', indexRouter); //this should be the last imported route


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({
    error,
    message: 'Something went wrong on the host'
  })
});

db.sequelize.sync().then(function() {

});

module.exports = app;
