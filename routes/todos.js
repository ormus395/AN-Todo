const express = require('express');
const router = express.Router();
const Todo = require('../models/Todos');


const states = [
  {id: 0, state: 'CA', population: 100000}
];


router.get('/', (req, res) => {
  Todo.find({})
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
});

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

router.get('/states', (req, res) => {
  res.json(states)
});

router.get('/states', (req, res) => {
  if(state.name === req.params) {
    res.json(state)
  } else {
    res.json({message: 'State not found'})
  }
});



module.exports = router;