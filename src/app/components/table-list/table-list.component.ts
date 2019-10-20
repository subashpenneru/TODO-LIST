import { Component, OnInit, AfterViewInit, Input, ViewChild } from '@angular/core';
import { TodoListService } from 'src/app/service/todo-list.service';
import * as moment from 'moment';
import { MatDialog, MatTableDataSource, MatSort } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  public displayedColumns: string[] = ['id', 'task', 'date', 'action', 'edit'];
  dataSource = new MatTableDataSource(_TODOLIST);
  public listId: number;
  public isLoadingResults = true;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(private listServ: TodoListService, private dialog: MatDialog) { }

  ngOnInit() {
    this.getTodo();
    this.dataSource.sort = this.sort;
  }

  getTodo() {
    this.isLoadingResults = true;
    this.listServ.getTodoList().subscribe((res: TODOLIST[]) => {
      res.forEach(e => {
        this.listId = e.id;
        e.date = moment(e.date).format('YYYY-MM-DD');
      })
      this.listServ.listID.next(this.listId);
      this.dataSource.data = res;
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

  applyFilter(event: string) {
    this.dataSource.filter = event.trim().toLowerCase();
  }
}

export interface TODOLIST {
  id: number,
  task: string,
  date: string
}

export const _TODOLIST:Array<TODOLIST> = [
  {id: 1, task: '', date: ''}
]