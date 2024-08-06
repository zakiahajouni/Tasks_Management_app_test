import { Component } from '@angular/core';
import { Project } from '../model/project.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-list-component',
  templateUrl: './project-list-component.component.html',
  styleUrls: ['./project-list-component.component.css']
})
export class ProjectListComponentComponent {
  projects : Project[]
    constructor(private projectService: ProjectService ) {
    this.projects = projectService.getProjects();
   }


   deleteProject(p: Project)
     {
   let conf = confirm("Etes-vous sûr ?");
     if (conf)
       this.projectService.deleteProject(p);
      }




}
