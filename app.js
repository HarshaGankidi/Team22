var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./app_server/routes/index');
var usersRouter = require('./app_server/routes/users');

var app = express();

// view engine setup
<<<<<<< HEAD
app.set('views', path.join(__dirname,'app_server','views'));
=======
app.set('views', path.join(__dirname,'app_server', 'views'));
>>>>>>> 88aa64a2bdfef9e29f618a1cd09bc825bd4d3b13
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
<<<<<<< HEAD
app.use(express.static(path.join(__dirname,'public')));
=======
app.use(express.static(path.join(__dirname, 'public')));
>>>>>>> 88aa64a2bdfef9e29f618a1cd09bc825bd4d3b13

app.use('/', indexRouter);
app.use('/users', usersRouter);

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
  res.render('error');
});

<<<<<<< HEAD

=======
>>>>>>> 88aa64a2bdfef9e29f618a1cd09bc825bd4d3b13
module.exports = app;
