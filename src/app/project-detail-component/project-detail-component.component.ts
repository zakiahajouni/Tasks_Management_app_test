import { Component } from '@angular/core';
import { Project } from '../model/project.model';
import { ProjectService } from '../project.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-detail-component',
  templateUrl: './project-detail-component.component.html',
  styleUrls: ['./project-detail-component.component.css']
})
export class ProjectDetailComponentComponent {
  projects : Project[]
  currentProject  = new Project();

    constructor(private projectService: ProjectService , private activatedRoute: ActivatedRoute, ) {
      this.projects = [
    {id: 1,  name : "Angular Project", description : "Project for tasks management "},
    {id: 2,  name : "Mern Project", description : "Project for incomes management"},
    {id: 1,  name : "Flutter Project", description : "project for employees management"}

      ] }
      ngOnInit() {
      this.currentProject = this.projectService.consulterProject(this.activatedRoute.snapshot. params['id']);
         console.log(this.currentProject);
        }
}
