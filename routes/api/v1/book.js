//从数据库中把昨天的数据写出来
const rooter = require('express').Router();
const { Book } = require('../../../models'); //别忘记给Book加大括号，因为它是结构赋值
//下边rooter.get()这一段操作就定义好了一个接口，然后在app.js文件中用一下这个接口

rooter.get('/', async (req, res) => {
  const books = await Book.find({}).sort({ _id: -1 });
  res.json({
    books
  });
});

module.exports = rooter;
