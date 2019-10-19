import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }

  createDb() {

    let todoList = [
      { id: 1, task: 'round 1', date: new Date() }
    ];

    return { todoList };
  }
}
