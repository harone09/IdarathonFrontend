import { ProjetServiceService } from './../../services/projet-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css']
})
export class UpdateProjectComponent implements OnInit {
  currentProject;
  message = '';
  constructor(private tutorialService: ProjetServiceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getProject(this.route.snapshot.paramMap.get('id'));
  }

  getProject(id): void {
    this.tutorialService.get(id)
      .subscribe(
        data => {
          this.currentProject = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }


  updateProject(): void {
    this.tutorialService.update(this.currentProject.id, this.currentProject)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The Project was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteProject(): void {
    this.tutorialService.delete(this.currentProject.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/projets']);
        },
        error => {
          console.log(error);
        });
  }

}
