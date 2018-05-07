var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var upload = require('jquery-file-upload-middleware');
var mangoose = require('mongoose');
var bodyParser = require('body-parser');
var session = require('express-session');
var aws = require('aws-sdk');




var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var dashboardRouter = require('./routes/dashboard');
var loginRouter = require('./routes/mylogin');
var signupRouter = require('./routes/mySignup');
var logoutRouter = require('./routes/myLogout');








var app = express();
// configure upload middleware
upload.configure({
  uploadDir: __dirname + '/public/uploads',
  uploadUrl: '/uploads',
  imageVersions: {
      thumbnail: {
          width: 80,
          height: 80
      }
  }
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(session({secret : "Shh, its a secret!", resave:false, saveUninitialized:true}));

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/upload', upload.fileHandler());

app.use('/mylogin', loginRouter);
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/dashboard', dashboardRouter);
app.use('/mySignup', signupRouter);
app.use('/myLogout', logoutRouter);




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
