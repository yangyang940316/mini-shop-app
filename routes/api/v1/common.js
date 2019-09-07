const router = require('express').Router();
const multer = require('multer');
//storage这一段是从multer插件所在的网上粘贴过来的
var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, __dirname + '/../../../public/upload');
  },
  filename: function(req, file, cb) {
    req.filename =
      '/upload/' + file.fieldname + '-' + Date.now() + '-' + file.originalname;
    cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname);
  }
});
var upload = multer({ storage: storage });
//upload.single("file")中的参数file，表示表单中的字段名
router.post('/file_upload', upload.single('file'), (req, res) => {
  res.json({
    code: 1,
    info: req.filename
  });
});

module.exports = router;
