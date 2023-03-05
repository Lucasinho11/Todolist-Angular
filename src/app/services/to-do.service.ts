import { Injectable } from '@angular/core';
import { Todo } from '../models/to-do.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[] = [];

  getAllTodos(): Todo[] {
    return this.todos;
  }

  addTodo(task:string){
    if(!task){
      alert('error');
    }
    if(task){
      let todo = new Todo();
      todo.name = task;
      todo.isFinished = false;
      this.todos.push(todo);
      task = '';
    }
    return task;
  }

  done(id:number){
    this.todos[id].isFinished = !this.todos[id].isFinished;
    return this.todos;
  }

  delete(id:number){
    this.todos = this.todos.filter((v,i)=> i != id);
    return this.todos;
  }

}
