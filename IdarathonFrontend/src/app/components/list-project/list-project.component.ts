import { ProjetServiceService } from './../../services/projet-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.css']
})
export class ListProjectComponent implements OnInit {
  projects: any;
  currentProject;
  currentIndex = -1;
  constructor(private projetServ:ProjetServiceService) { }
  ngOnInit(): void {
    this.retrieveProjects();

  }

  retrieveProjects(): void {
    this.projetServ.getAll()
      .subscribe(
        data => {
          this.projects = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveProjects();
    this.currentProject = null;
    this.currentIndex = -1;
  }

  setActiveProject(project, index): void {
    this.currentProject = project;
    this.currentIndex = index;
  }


}
