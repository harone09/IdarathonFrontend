import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProjetServiceService } from 'src/app/services/projet-service.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-delete-tache',
  templateUrl: './delete-tache.component.html',
  styleUrls: ['./delete-tache.component.css']
})
export class DeleteTacheComponent implements OnInit {

  constructor(public router: Router, private projetServ:ProjetServiceService,public dialogRef: MatDialogRef<DeleteTacheComponent>
    ,@Inject(MAT_DIALOG_DATA) public data: DeleteprojectModel){

    }

    async ngOnInit(): Promise<void> {
      if (localStorage.getItem('User') == null) {
        this.router.navigate(['/login']);
      }
      (await this.projetServ.getTache(this.data.id)).subscribe(r=>{
        this.data=r;
      })
    }

    onValid():void{
   this.submitDeleteProject(this.data);
      this.dialogRef.close();
    }

    onNoClick(): void {
      this.dialogRef.close();
    }

  async submitDeleteProject(p): Promise<void> {
    (await this.projetServ.deleteTache(p.id)).subscribe();
  }

}

export class DeleteprojectModel {

  constructor(public id:number,public name:string,public description:string,public dateDebut:Date,public dateFin:Date,public pourcentage:number,public validation:boolean) {
  }
}
