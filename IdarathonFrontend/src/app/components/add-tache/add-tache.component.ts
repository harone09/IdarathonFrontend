import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProjetServiceService } from 'src/app/services/projet-service.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-tache',
  templateUrl: './add-tache.component.html',
  styleUrls: ['./add-tache.component.css']
})
export class AddTacheComponent implements OnInit {

  constructor(public router: Router, private projetServ:ProjetServiceService,public dialogRef: MatDialogRef<AddTacheComponent>
    ,@Inject(MAT_DIALOG_DATA) public data: AddPhaseModel) { }

  ngOnInit(): void {
    if (localStorage.getItem('User') == null) {
      this.router.navigate(['/login']);
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

 onValid():void{
    this.submitAddProject(this.data);
    this.dialogRef.close();
  }

   submitAddProject(p): void {
     this.projetServ.createTache(this.data.idPhase,p).subscribe(c => {
          console.log("after creating");
          console.log(c);
     });
    console.log("test ajout");
    console.log(p);
  }
}

export class AddPhaseModel {

  constructor(public name:string,public description:string,public dateDebut:Date,public dateFin:Date,public pourcentage:number,public idPhase:number) {
  }
}
