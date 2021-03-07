import { ProjetServiceService } from './../../services/projet-service.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  constructor(public router: Router, private projetServ:ProjetServiceService,public dialogRef: MatDialogRef<AddProjectComponent>
    ,@Inject(MAT_DIALOG_DATA) public data: AddprojectModel) { }

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
     this.projetServ.create(p).subscribe(c => {
          console.log("after creating");
          console.log(c);
     });
    console.log("test ajout");
    console.log(p);
  }
}

export class AddprojectModel {

  constructor(public name:string,public description:string,public dateDebut:Date,public dateFin:Date) {
  }
}
