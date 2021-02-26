import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProjetServiceService } from 'src/app/services/projet-service.service';

@Component({
  selector: 'app-update-tache',
  templateUrl: './update-tache.component.html',
  styleUrls: ['./update-tache.component.css']
})
export class UpdateTacheComponent implements OnInit {

  async ngOnInit(): Promise<void> {
    (await this.projetServ.getTache(this.data.id)).subscribe(r=>{
      this.data=r;
    })
  }

  constructor(private projetServ:ProjetServiceService,public dialogRef: MatDialogRef<UpdateTacheComponent>
    ,@Inject(MAT_DIALOG_DATA) public data: UpdatePhaseModel) { }


  onNoClick(): void {
    this.dialogRef.close();
  }

  onValid():void{
    this.submitUpdateProject(this.data);
    this.dialogRef.close();
  }

  async submitUpdateProject(p): Promise<void> {
    (await this.projetServ.updateTache(p.id, p)).subscribe();
  }
}

export class UpdatePhaseModel {

  constructor(public id:number,public name:string,public description:string,public dateDebut:Date,public dateFin:Date,public pourcentage:number,public validation:boolean) {
  }
}
