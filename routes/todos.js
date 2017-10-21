const express = require('express');
const router = express.Router();
const Todo = require('../models/Todos');

router.get('/', (req, res) => {
  Todo.find({})
    .sort({date: 'descending'})
    .then(todo => {
      res.json(todo)
    });
});


router.post('/add', (req, res) => {
  let newTodo = {
    title: req.body.title,
    details: req.body.details
  }
  new Todo(newTodo).save()
    .then(newTodo => {
      res.json({success: true, message: 'Todo submitted', obj: newTodo})
    })
    .catch(err => {
      res.json({success: false, message: 'SOMETING BWOK'})
    })
})

router.put('/edit/:id', (req, res) => {
  Todo.findOne({_id: req.params.id})
    .then(todo => {
      todo.title = req.body.title || todo.title;
      todo.details = req.body.details || todo.details;
      todo.save()
        .then(todo => {
          res.json({success: true, message: 'Todo updated'})
        });
    });
});

router.delete('/:id', (req, res) => {
  Todo.remove({_id: req.params.id})
    .then(() => {
      res.json({success: true, message: 'Todo deleted'})
    });
});

module.exports = router;