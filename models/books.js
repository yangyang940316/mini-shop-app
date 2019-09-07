const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//下面这一行代码是定义一个数据模型，也就是定义这个模型的架构或者叫骨架
const modelSchema = new Schema(
  {
    title: {
      type: String,
      required: true //意思是要求title为必填项
    },
    price: {
      type: Number,
      default: 0 //表示是一个默认值
    },
    author: {
      type: String,
      default: ''
    },
    publishTime: {
      type: Date,
      default: new Date()
    },
    coverImg: {
      type: String,
      default: ''
    }
  },
  {
    timestamps: true //它的作用是为每一条记录添加一个创建和修改的时间戳
  }
);

const Book = mongoose.model('book', modelSchema); //啥意思
module.exports = Book; //导出

//以上思路：首先创建一个model,并在model中添加内容，最后进行导出
