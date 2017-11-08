export class TodoService {
  
  constructor($resource, $http) {
    this.GetTodoResource = $resource('/api/todos');
    this.TodoDeleteReource = $resource('/api/todos/:id');
    this.TodoAddReource = $resource('/api/todos/add');
    this.TodoEditResource = $resource('/api/todos/edit/:id');
  }

  getTodos() {
    return this.GetTodoResource.query();
  }

  addTodo(todo) {
    return this.TodoAddReource.save(todo).$promise;
  }

  deleteTodo(_id) {
    return this.TodoDeleteReource.delete({id: _id}).$promise;
  }

  editTodo(todo, id) {
    return this.TodoEditResource.save({id: _id}, todo).$promise;
  }

}

TodoService.$inject = ['$resource', '$http'];