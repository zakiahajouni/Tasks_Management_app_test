import { Component } from '@angular/core';
import { Task } from '../model/task.model';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent {
  tasks : Task[]

    constructor() {
      this.tasks = [
    {id: 1,  title : "Bacekend methods development", description : "Backend methods development ", due_date :new Date('2022-10-31'), completed: true  ,project_id:1, assigned_to : 1},
    {id: 2,  title : "User interfaces developmenet ", description : "User interfaces  development ", due_date :new Date('2023-10-02'), completed: false  ,project_id:2, assigned_to : 2},

      ] }
}
