var express = require('express');
var router = express.Router();
const { Book } = require('../models');

/* GET home page. */
router.get('/books', async (req, res, next) => {
  const books = await Book.find({});
  res.render('books/index', {
    books
  });
});

router.get('/books/:id', async (req, res, next) => {
  const book = await Book.findById(req.params.id);
  res.render('books/detail', {
    book,
    msg: `<div class="tip"><p>我是一个提示信息</p></div>`
  });
});

router.get('/', function(req, res, next) {
  //res.render它的作用是使用指定的模板文件显示页面内容
  res.render('index', {
    title: 'Express',
    name: '小贝',
    age: 17,
    menpai: '恒山派',
    ismengzhu: true,
    list: [
      {
        id: 1,
        name: '佟掌柜'
      },
      {
        id: 2,
        name: '白展堂'
      },
      {
        id: 3,
        name: '莫小贝'
      },
      {
        id: 4,
        name: '郭芙蓉'
      }
    ]
  });
});

module.exports = router;
