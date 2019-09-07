//这个文件这是管理后台的主入口
const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('admin/main');
});

module.exports = router;
