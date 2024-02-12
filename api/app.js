
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
require('dotenv').config()

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var patientRouter = require('./routes/patient');
var examRouter = require('./routes/exam');
var adminRouter = require('./routes/admin');

var app = express();

app.use(express.json())

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/patient', patientRouter);
app.use('/exam', examRouter);
app.use('/admin', adminRouter);



//db.on('error', (error) => console.error(error))
//db.once('open', () => console.log('Connected to database'))

app.listen(process.env.PORT, () => {
  console.log('listening on port', process.env.PORT)
})

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

module.exports = app;
