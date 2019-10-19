import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  public url = 'api/todoList';
  public listID = new BehaviorSubject(1);

  constructor(private http: HttpClient) { }

  getTodoList() {
    return this.http.get(this.url);
  }

  createTodoList(list) {
    return this.http.post(this.url, list);
  }

  deleteTodoList(listId) {
    return this.http.delete(this.url + '/' + listId);
  }

  updateTodoList(listId, data) {
    return this.http.put(this.url + `/${listId}`, data);
  }
}
