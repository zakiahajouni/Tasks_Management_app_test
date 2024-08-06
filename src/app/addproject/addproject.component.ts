import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../model/project.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.css']
})
export class AddprojectComponent implements OnInit {
  newProject = new Project();
  constructor(private projectService: ProjectService ,private router: Router) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  createProject(){
    this.projectService.createProject(this.newProject);
    this.router.navigate(['/', 'projects']);

   }
}
