import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/to-do.service';
import { Todo } from '../models/to-do.model';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit{

  todos!: Todo[];
  task!: string;

  constructor(private TodoService: TodoService) { }

  ngOnInit(): void {
    this.todos = this.TodoService.getAllTodos();
  }

  saveTodo(task:string){
    this.task = this.TodoService.addTodo(task);
  }

  done(id: number){
    this.todos = this.TodoService.done(id);
  }

  delete(id:number){
    this.todos = this.TodoService.delete(id);
  }
}
