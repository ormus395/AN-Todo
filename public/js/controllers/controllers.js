export class TodoController {
  constructor(TodoService, $state) {
    this.$state = $state;
    this.todoService = TodoService;
    this.todos = TodoService.getTodos();
  }

  addTodo() {
    this.todoService.addTodo(this.todo);
    this.todos.push(this.todo);
  }

  deleteTodo(_id) {
    console.log(_id)
    this.todoService.deleteTodo(_id);
    for(let i = 0; i < this.todos.length; i++) {
      if(this.todos[i]._id == _id) {
        this.todos.splice(i, 1);
      }
    }
  }
}

TodoController.$inject = ['TodoService', '$state'];

export class AboutController {
  constructor() {
    this.message = 'About Us'
  }
}