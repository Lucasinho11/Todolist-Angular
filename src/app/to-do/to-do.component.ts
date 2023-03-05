import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/to-do.service';
import { Todo } from '../models/to-do.model';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit{

  //todos!: Todo[];
  task!: string;
  error!: string;
  todos$!: Observable<Todo[]>;

  constructor(private TodoService: TodoService) { }

  ngOnInit(): void {
    this.todos$ = this.TodoService.getAllTodos();
  }

  saveTodo(task:string){
      if(!task){
        this.error = 'The field is empty! 😱';
        return this.error;
      }
    this.error= '';
    this.TodoService.addTodo(task);
    this.task = '';
    return this.todos$ = this.TodoService.getAllTodos();
  }

  done(id: number){
    this.TodoService.done(id);
    return this.todos$ = this.TodoService.getAllTodos();
  }

  delete(id:number){
    this.TodoService.delete(id);
    return this.todos$ = this.TodoService.getAllTodos();
  }
}
