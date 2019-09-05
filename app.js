var createError = require('http-errors'); //这个插件是处理Http请求异常的
var express = require('express');
var path = require('path'); //用来做路径解析的
var cookieParser = require('cookie-parser'); //用来格式化cookie数据的
var logger = require('morgan'); //用来输出日志的
const mongoose = require('mongoose');
mongoose
  .connect('mongodb://localhost/app-1907')
  .then(res => {
    console.log('连接成功');
  })
  .catch(err => {
    console.log(err);
  });

var indexRouter = require('./routes/index'); //这两行是路由文件
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); //设置当前项目使用的模板引擎

app.use(logger('dev')); //日志输出
//下边是格式化body请求体
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser()); //格式化cookie数据，把它格式化成对象的形式，要知道cookie是在请求头中传递的
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/v1/books', require('./routes/api/v1/book')); //这一步执行成功的话，数据就被请求出来了，接下来需要在在页面中展示出来，回到index.js中进行代码编写
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
