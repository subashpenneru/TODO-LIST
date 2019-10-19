import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { TodoListService } from 'src/app/service/todo-list.service';
import * as moment from 'moment';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  public displayedColumns: string[] = ['id', 'task', 'date', 'action', 'edit'];
  dataSource: TODOLIST[];
  public listId: number;
  public isLoadingResults = true;

  constructor(private listServ: TodoListService, private dialog: MatDialog) { }

  ngOnInit() {
    this.getTodo();
  }

  getTodo() {
    this.isLoadingResults = true;
    this.listServ.getTodoList().subscribe((res: TODOLIST[]) => {
      res.forEach(e => {
        this.listId = e.id;
        e.date = moment(e.date).format('YYYY-MM-DD');
      })
      this.listServ.listID.next(this.listId);
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

  openDialog(listData: TODOLIST) {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '350px',
      data: { id: listData.id, task: listData.task, date: listData.date }
    })

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.listServ.updateTodoList(result.id, result).subscribe(res => {
          this.getTodo();
        }, err => console.log(err))
      }
    })
  }
}

export interface TODOLIST {
  id: number,
  task: string,
  date: string
}
