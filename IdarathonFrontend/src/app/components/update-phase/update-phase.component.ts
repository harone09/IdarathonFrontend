import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProjetServiceService } from 'src/app/services/projet-service.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-update-phase',
  templateUrl: './update-phase.component.html',
  styleUrls: ['./update-phase.component.css']
})
export class UpdatePhaseComponent implements OnInit {

  async ngOnInit(): Promise<void> {
    if (localStorage.getItem('User') == null) {
      this.router.navigate(['/login']);
    }
    (await this.projetServ.getPhase(this.data.id)).subscribe(r=>{
      this.data=r;
    })
  }

  constructor(public router: Router, private projetServ:ProjetServiceService,public dialogRef: MatDialogRef<UpdatePhaseComponent>
    ,@Inject(MAT_DIALOG_DATA) public data: UpdatePhaseModel) { }


  onNoClick(): void {
    this.dialogRef.close();
  }

  onValid():void{
    this.submitUpdateProject(this.data);
    this.dialogRef.close();
  }

  async submitUpdateProject(p): Promise<void> {
    (await this.projetServ.updatePhase(p.id, p)).subscribe();
  }
}

export class UpdatePhaseModel {

  constructor(public id:number,public name:string,public description:string,public dateDebut:Date,public dateFin:Date,public pourcentage:number) {
  }
}
