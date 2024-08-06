import { Injectable } from '@angular/core';
import { Project } from './model/project.model';
 @Injectable({
providedIn: 'root'
})
export class ProjectService {
projects : Project[];
project! : Project;

constructor() {
  this.projects = [
{id: 1,  name : "Angular Project", description : "Project for tasks management "},
{id: 2,  name : "Mern Project", description : "Project for incomes management"},
{id: 1,  name : "Flutter Project", description : "project for employees management"}

  ] }
  getProjects():Project[] {

      return this.projects;
    }

    createProject( proj: Project){
      this.projects.push(proj);
    }
 
    deleteProject( proj: Project){
       const index = this.projects.indexOf(proj, 0);
       if (index > -1) {
         this.projects.splice(index, 1);
       }


     }
     consulterProject(id:number): Project{
      this.project =  this.projects.find(p => p.id == id)!;
      return this.project;
      }

      updateProject(p:Project)
      {
        this.deleteProject(p);
        this.createProject(p);
      }
}
