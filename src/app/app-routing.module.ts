import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddprojectComponent } from './addproject/addproject.component';
import { ProjectDetailComponentComponent } from './project-detail-component/project-detail-component.component';
import { ProjectListComponentComponent } from './project-list/project-list-component.component';
import { ProjectGuard } from './project.guard';
import { TaskDetailComponent } from './task-detail/task-detail.component';
const routes: Routes = [
  {path: "projects", component : ProjectListComponentComponent , canActivate:[ProjectGuard]},
  {path: "projects/:id", component : ProjectDetailComponentComponent},
  {path: "tasks", component : TaskDetailComponent},
  {path: "add-project", component : AddprojectComponent},


   ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
