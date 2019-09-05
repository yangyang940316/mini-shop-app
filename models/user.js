const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//下面这一行代码是定义一个数据模型，也就是定义这个模型的架构或者叫骨架
const modelSchema = new Schema(
  {
    username: {
      type: String,
      required: true
    },
    password: {
      type: Number,
      default: 0 //表示是一个默认值
    },
    nickname: {
      type: String,
      default: ''
    },
    mobile: {
      type: Number,
      default: ''
    },
    adress: {
      type: String,
      default: ''
    },
    avatars: {
      type: String,
      default: ''
    }
  },
  {}
);

const User = mongoose.model('user', modelSchema); //啥意思
module.exports = User; //导出
