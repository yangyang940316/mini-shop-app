//这个文件的作用是把之前写的book模型和user模型组合在一起
const User = require('./user');
const Book = require('./books');

module.exports = {
  User,
  Book
};
