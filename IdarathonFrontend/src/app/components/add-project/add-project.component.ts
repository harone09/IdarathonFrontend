import { ProjetServiceService } from './../../services/projet-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  projet={
   name:'',
   description:'',
   dateDebut:'',
   dateFin:''};
   submitted = false;

  constructor(private projetServ:ProjetServiceService) { }

  ngOnInit(): void {
  }

  saveTutorial(): void {
    const data = {
      name: this.projet.name,
      description: this.projet.description,
      dateDebut:this.projet.dateDebut,
      dateFin:this.projet.dateFin
    };

    this.projetServ.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;

        },
        error => {
          console.log(error);
        });
  }

  newTutorial(): void {
    this.submitted = false;
    this.projet = {
      name:'',
      description:'',
      dateDebut:'',
      dateFin:''};
  }

}
