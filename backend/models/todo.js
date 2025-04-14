const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const TodoSchema = new mongoose.Schema({
    title: {type: String,required: true},
    description: {type: String,required: false},
    completed: {type: Boolean},
    isDeleted: { type: Boolean, default: false },
    createdAt: {type: Date,default: Date.now}

});
const Todo = mongoose.model('Todo', TodoSchema);
module.exports = Todo;