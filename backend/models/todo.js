const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    title: String,
    author: String,
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = {
    Todo
};