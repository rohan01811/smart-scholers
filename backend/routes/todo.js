const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Todo = require('../models/todo.js');

// Define the Todo schema
router.post('/', async (req, res) => {
  
    const { title, description, completed, isDeleted, createdAt } = req.body;
    try {
      const newTodo = new Todo({ title, description, completed, isDeleted,createdAt });
      await newTodo.save();
      res.status(201).json({ message: 'Todo added successfully', todo: newTodo });
    } catch (error) {
      console.error('❌ Error adding todo:', error);
      res.status(500).json({ message: 'Error adding todo', error });
    }
  });
  
router.get('/', async (req, res) => {
    try {
      const todos = await Todo.find({ isDeleted: false }); // Only active ones
      res.status(200).json(todos);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching todos', error });
    }
  });
 
  router.patch('/clear', async (req, res) => {
    try {
      await Todo.updateMany({ isDeleted: false }, { isDeleted: true });
      res.status(200).json({ message: 'Todos archived' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to archive todos', error });
    }
  });

  router.get('/history', async (req, res) => {
    try {
      const history = await Todo.find({ isDeleted: true });
      res.status(200).json(history);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching history', error });
    }
  });

  router.patch('/:id', async (req, res) => {
    const { completed } = req.body;
  
    try {
      const updatedTodo = await Todo.findByIdAndUpdate(
        req.params.id,
        { completed },
        { new: true }
      );
  
      if (!updatedTodo) {
        return res.status(404).json({ message: 'Todo not found' });
      }
  
      res.status(200).json(updatedTodo);
    } catch (error) {
      console.error('❌ Error updating todo:', error);
      res.status(500).json({ message: 'Error updating todo', error });
    }
  });
  
  
module.exports = router; // 🔥 This is what was missing!
