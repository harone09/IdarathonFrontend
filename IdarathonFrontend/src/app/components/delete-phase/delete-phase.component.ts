import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProjetServiceService } from 'src/app/services/projet-service.service';

@Component({
  selector: 'app-delete-phase',
  templateUrl: './delete-phase.component.html',
  styleUrls: ['./delete-phase.component.css']
})
export class DeletePhaseComponent implements OnInit {

  constructor(private projetServ:ProjetServiceService,public dialogRef: MatDialogRef<DeletePhaseComponent>
    ,@Inject(MAT_DIALOG_DATA) public data: DeleteprojectModel){

    }

    async ngOnInit(): Promise<void> {
      (await this.projetServ.getPhase(this.data.id)).subscribe(r=>{
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
    (await this.projetServ.deletePhase(p.id)).subscribe();
  }

}

export class DeleteprojectModel {

  constructor(public id:number,public name:string,public description:string,public dateDebut:Date,public dateFin:Date,public pourcentage:number) {
  }
}
