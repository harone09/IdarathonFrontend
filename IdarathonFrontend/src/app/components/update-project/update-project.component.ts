import { ProjetServiceService } from './../../services/projet-service.service';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css']
})
export class UpdateProjectComponent implements OnInit {

  async ngOnInit(): Promise<void> {
    if (localStorage.getItem('User') == null) {
      this.router.navigate(['/login']);
    }
    (await this.projetServ.get(this.data.id)).subscribe(r=>{
      this.data=r;
    })
  }

  constructor(public router: Router, private projetServ:ProjetServiceService,public dialogRef: MatDialogRef<UpdateProjectComponent>
    ,@Inject(MAT_DIALOG_DATA) public data: UpdateprojectModel) { }


  onNoClick(): void {
    this.dialogRef.close();
  }

  onValid():void{
    this.submitUpdateProject(this.data);
    this.dialogRef.close();
  }

  async submitUpdateProject(p): Promise<void> {
    (await this.projetServ.update(p.id, p)).subscribe();
  }
}

export class UpdateprojectModel {

  constructor(public id:number,public name:string,public description:string,public dateDebut:Date,public dateFin:Date) {
  }
}
