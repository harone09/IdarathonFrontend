import { DeletePhaseComponent } from './../delete-phase/delete-phase.component';
import { UpdatePhaseComponent } from './../update-phase/update-phase.component';
import { AddPhaseComponent } from './../add-phase/add-phase.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ProjetServiceService } from 'src/app/services/projet-service.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { UpdateTacheComponent } from '../update-tache/update-tache.component';
import { AddTacheComponent } from '../add-tache/add-tache.component';
import { DeleteTacheComponent } from '../delete-tache/delete-tache.component';
export interface Tache{
  id:number;
	name:String;
	description:String;
	dateDebut:Date;
	dateFin:Date;
	pourcentage:Date;
	validation:Boolean;
}
export interface Phase{
  id:number;
  name: string;
  description:string;
  dateDebut:Date;
  dateFin: Date;
  pourcentage:number;
  nbrtaches:number;
  currentPercent:number;
  taches:Tache[];
}

@Component({
  selector: 'app-list-phase',
  templateUrl: './list-phase.component.html',
  styleUrls: ['./list-phase.component.css']
})
export class ListPhaseComponent implements OnInit {
  idP!: number;
  currentProject;
  phases:Phase[]=[];
  selectedPhase;
  selectedIndex=-1;
  displayedColumnsPhases: string[] = ['name', 'dateDebut', 'dateFin', 'pourcentage', 'nbrtaches','currentPercent','Actions'];
  dataSourcePhases=new MatTableDataSource<Phase>();
  @ViewChild('sortPhases') sortPhases:MatSort;
  @ViewChild('paginatorPhases') paginatorPhases
  displayedColumnsTaches: string[] = ['name', 'dateDebut', 'dateFin', 'pourcentage', 'validation','Actions'];
  dataSourceTaches=new MatTableDataSource<Tache>();
  @ViewChild('sortTaches') sortTaches:MatSort;
  @ViewChild('paginatorTaches') paginatorTaches

  constructor(public addDialogT:MatDialog,public updateDialogT:MatDialog,public deleteDialogT:MatDialog,public addDialog:MatDialog,public updateDialog:MatDialog,public deleteDialog:MatDialog,private router:Router, private activeRoute:ActivatedRoute,private projetServ:ProjetServiceService) {
    this.sortPhases=new MatSort();
    this.sortTaches=new MatSort();
   }

  async ngOnInit(): Promise<void> {
   this.idP=this.activeRoute.snapshot.params.id;
    await this.retrieveProject(this.idP);
  }

  async retrieveProject(id) {
    (await this.projetServ.get(id))
     .subscribe(
       data => {
         this.currentProject=data;
         setTimeout(() => {
          this.dataSourcePhases=new MatTableDataSource<Phase>(this.currentProject.phases);
          this.dataSourcePhases.sort=this.sortPhases;
          this.dataSourcePhases.paginator=this.paginatorPhases;
         }, 1000);

       },
       error => {
         console.log(error);
       });
 }

 getSelectedPhase(p,i)
 {
   this.selectedPhase=p;
   this.selectedIndex=i;
   this.dataSourceTaches=new MatTableDataSource<Tache>(this.selectedPhase.taches);
   this.dataSourceTaches.sort=this.sortTaches;
   this.dataSourceTaches.paginator=this.paginatorTaches;
 }

 refreshSelectedPhase()
 {
   this.selectedPhase=null;
   this.selectedIndex=-1;
 }

 applyFilterPhases(filterValue: string): void{
  filterValue = filterValue.trim();
  filterValue = filterValue.toLowerCase();
  this.dataSourcePhases.filter = filterValue;
}

applyFilterTaches(filterValue: string): void{
  filterValue = filterValue.trim();
  filterValue = filterValue.toLowerCase();
  this.dataSourceTaches.filter = filterValue;
}

 openAddDialog(): void {
  const dialogRef = this.addDialog.open(AddPhaseComponent, {
    maxWidth: "100%",
    data:{
      name:'',
      description:'',
      dateDebut:'',
      dateFin:'',
      pourcentage:'',
      idProjet:this.idP
    }
  });
  dialogRef.afterClosed().subscribe(result=>{
    setTimeout(() => {
      this.retrieveProject(this.idP);
    }, 1000);
  });
}

openUpdateDialog(idP:number):void{
  const dialogRef = this.updateDialog.open(UpdatePhaseComponent, {
    maxWidth: "100%",
    data:{
      id:idP,
      name:'',
      description:'',
      dateDebut:'',
      dateFin:'',
      pourcentage:''
    }
  });
  dialogRef.afterClosed().subscribe(result=>{
    setTimeout(() => {
      this.retrieveProject(this.idP);
    }, 1000);
  })
}
 openDeleteDialog(idP:number):void{
  const dialogRef = this.deleteDialog.open(DeletePhaseComponent, {
    maxWidth: "100%",
    data:{
      id:idP,
      name:'',
      description:'',
      dateDebut:'',
      dateFin:'',
      pourcentage:''
    }
  });
  dialogRef.afterClosed().subscribe(result=>{
    setTimeout(() => {
      this.retrieveProject(this.idP);
    }, 1000);

  })
}

openAddDialogT(): void {
  const dialogRef = this.addDialogT.open(AddTacheComponent, {
    maxWidth: "100%",
    data:{
      name:'',
      description:'',
      dateDebut:'',
      dateFin:'',
      pourcentage:'',
      idPhase:this.selectedPhase.id
    }
  });
  dialogRef.afterClosed().subscribe(result=>{
    this.dataSourceTaches=new MatTableDataSource();
    setTimeout(() => {
      this.retrieveProject(this.idP);
    }, 1000);
  });
}

openUpdateDialogT(idP:number):void{
  const dialogRef = this.updateDialogT.open(UpdateTacheComponent, {
    maxWidth: "100%",
    data:{
      id:idP,
      name:'',
      description:'',
      dateDebut:'',
      dateFin:'',
      pourcentage:'',
      validation:''
    }
  });
  dialogRef.afterClosed().subscribe(result=>{
    this.dataSourceTaches=new MatTableDataSource();
    setTimeout(() => {
      this.retrieveProject(this.idP);
    }, 1000);
  })
}
 openDeleteDialogT(idP:number):void{
  const dialogRef = this.deleteDialogT.open(DeleteTacheComponent, {
    maxWidth: "100%",
    data:{
      id:idP,
      name:'',
      description:'',
      dateDebut:'',
      dateFin:'',
      pourcentage:'',
      validation:''
    }
  });
  dialogRef.afterClosed().subscribe(result=>{
    this.dataSourceTaches=new MatTableDataSource();
    setTimeout(() => {
      this.retrieveProject(this.idP);
    }, 1000);

  })
}

}
