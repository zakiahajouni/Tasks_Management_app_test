import { Injectable } from '@angular/core';
import { Task } from './model/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks : Task[];
  task! : Task;

  constructor() {
    this.tasks = [
      {id: 1,  title : "Bacekend methods development", description : "Backend methods development ", due_date :new Date('2022-10-31'), completed: true  ,project_id:1, assigned_to : 1},
      {id: 2,  title : "User interfaces developmenet ", description : "User interfaces  development ", due_date :new Date('2023-10-02'), completed: false  ,project_id:2, assigned_to : 2},

        ] }
    getTasks():Task[] {

        return this.tasks;
      }

      createTask( proj: Task){
        this.tasks.push(proj);
      }

      deleteTask( proj: Task){
         const index = this.tasks.indexOf(proj, 0);
         if (index > -1) {
           this.tasks.splice(index, 1);
         }


       }
       consulterTask(id:number): Task{
        this.task =  this.tasks.find(p => p.id == id)!;
        return this.task;
        }

        updateTask(t:Task)
        {
          this.deleteTask(t);
          this.createTask(t);
        }
  }
