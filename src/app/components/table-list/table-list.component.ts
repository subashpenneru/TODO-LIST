import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { TodoListService } from 'src/app/service/todo-list.service';
import * as moment from 'moment';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  public displayedColumns: string[] = ['id', 'task', 'date', 'action'];
  dataSource: TODOLIST[];
  public listId: number;
  public isLoadingResults = true;

  constructor(private listServ: TodoListService) { }

  ngOnInit() {
    this.getTodo();
  }

  getTodo() {
    this.isLoadingResults = true;
    this.listServ.getTodoList().subscribe((res: TODOLIST[]) => {
      res.forEach(e => {
        this.listId = e.id;
        e.date = moment(e.date).format('DD-MM-YYYY');
      })
      this.listServ.listID.next(this.listId);
      console.log(res)
      this.dataSource = res;
      this.isLoadingResults = false;
    }, error => console.log(error));
  }

  deleteTodoList(listData: TODOLIST) {
    this.isLoadingResults = true;
    this.listServ.deleteTodoList(listData.id).subscribe((res) => {
      this.getTodo();
    }, err => console.log(err));
  }
}

export interface TODOLIST {
  id: number,
  task: string,
  date: string
}
