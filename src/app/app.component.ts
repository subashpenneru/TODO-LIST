import { Component, ViewChild } from '@angular/core';
import { TodoListService } from './service/todo-list.service';
import { TODOLIST, TableListComponent } from './components/table-list/table-list.component';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TODO-LIST';
  @ViewChild('tableList', {static: false}) tableList: TableListComponent

  constructor(private listServ: TodoListService) {}

  getTodoListFormValues(event: TODOLIST) {

    let element = {
      id: this.listServ.listID.getValue() + 1,
      task: event.task,
      date: moment(event.date).format('MM-DD-YYYY')
    }
    console.log(element);
    this.postTodoListData(element);
  }

  postTodoListData(list) {
    this.listServ.createTodoList(list).subscribe(res => {
      this.tableList.getTodo();
      console.log(res)
    }, err => {
      console.log(err);
    })
  }
}
