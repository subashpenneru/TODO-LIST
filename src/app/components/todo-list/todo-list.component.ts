import { Component, OnInit, Output, EventEmitter, Input, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() header: any;
  public listForm: FormGroup;
  public listIdNo: number;
  @Output() listFormValues = new EventEmitter();

  constructor(private _fb: FormBuilder) {
    this.listForm = this._fb.group({
      task: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required)
    })
  }

  ngOnInit() {
  }

  onAddList() {
    this.listFormValues.emit(this.listForm.value);
    this.listForm.reset();
  }

  resetForm() {
    this.listForm.reset();
  }
}
