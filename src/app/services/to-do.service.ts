import { Injectable } from '@angular/core';
import { Todo } from '../models/to-do.model';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable} from 'rxjs';
import { switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[] = [];

  constructor(private http: HttpClient) {}

  getAllTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>('http://127.0.0.1:8000/api/tasks');

  }

  addTodo(task:string){
        return this.http.post<Todo>('http://127.0.0.1:8000/api/tasks', {"task": task }).subscribe();
  }

  done(id:number){
    let url = "http://127.0.0.1:8000/api/tasks/" + id;
    return this.http.put<Todo>(url, {"isFinished": true }).subscribe();  
  }

  delete(id:number){
    let url = "http://127.0.0.1:8000/api/tasks/" + id;
    let task = this.http.get<Todo[]>(url);
    return this.http.delete<Todo>(url).subscribe();
  }

}
