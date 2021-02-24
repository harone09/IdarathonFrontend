import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProjetServiceService } from 'src/app/services/projet-service.service';
import { UpdateprojectModel } from '../update-project/update-project.component';

@Component({
  selector: 'app-delete-project',
  templateUrl: './delete-project.component.html',
  styleUrls: ['./delete-project.component.css']
})
export class DeleteProjectComponent implements OnInit {

  constructor(private projetServ:ProjetServiceService,public dialogRef: MatDialogRef<DeleteProjectComponent>
    ,@Inject(MAT_DIALOG_DATA) public data: DeleteprojectModel){

    }

    async ngOnInit(): Promise<void> {
      (await this.projetServ.get(this.data.id)).subscribe(r=>{
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
    (await this.projetServ.delete(p.id)).subscribe();
  }

}

export class DeleteprojectModel {

  constructor(public id:number,public name:string,public description:string,public dateDebut:Date,public dateFin:Date) {
  }
}
