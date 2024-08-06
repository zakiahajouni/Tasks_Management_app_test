import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectListComponentComponent } from './project-list/project-list-component.component';
import { ProjectDetailComponentComponent } from './project-detail-component/project-detail-component.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { AddprojectComponent } from './addproject/addproject.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponentComponent,
    ProjectDetailComponentComponent,
    TaskDetailComponent,
    AddprojectComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,  FormsModule ,
    AppRoutingModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
