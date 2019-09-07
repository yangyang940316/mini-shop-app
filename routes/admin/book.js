//做管理后台，先引入一下
const router = require('express').Router();
const { Book } = require('../../models');

//正常的一个管理后台有列表页，新增页，提交页，也是要实现增删改查
router.get('/', async (req, res) => {
  const books = await Book.find({})
    // .skip(10)
    //.limit(10)
    .sort({ _id: -1 });
  res.render('admin/books/index', {
    books
  });
});
//新增
router.get('/new', async (req, res) => {
  res.render('admin/books/new');
});

//提交页，是post而不是get
router.post('/create', async (req, res, next) => {
  try {
    var book = new Book(req.body);
    await book.save();
    //res.send('保存成功'); //添加成功后，就可以把这行注销了
    //需要点击保存成功后做跳转
    res.redirect('/admin/books');
  } catch (err) {
    next(err);
  }
});

module.exports = router;
