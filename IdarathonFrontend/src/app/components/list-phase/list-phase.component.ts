import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ProjetServiceService } from 'src/app/services/projet-service.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
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
  constructor(private router:Router, private activeRoute:ActivatedRoute,private projetServ:ProjetServiceService) {
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
 /*
 openAddDialog(): void {
  const dialogRef = this.addDialog.open(AddProjectComponent, {
    maxWidth: "100%",
    data:{
      name:'',
      description:'',
      dateDebut:'',
      dateFin:''
    }
  });
  dialogRef.afterClosed().subscribe(result=>{
    setTimeout(() => {
      this.retrieveProjects();
    }, 1000);
  });
}


openUpdateDialog(idP:number):void{
  const dialogRef = this.updateDialog.open(UpdateProjectComponent, {
    maxWidth: "100%",
    data:{
      id:idP,
      name:'',
      description:'',
      dateDebut:'',
      dateFin:''
    }
  });
  dialogRef.afterClosed().subscribe(result=>{
    setTimeout(() => {
      this.retrieveProjects();
    }, 1000);
  })
}

 openDeleteDialog(idP:number):void{
  const dialogRef = this.deleteDialog.open(DeleteProjectComponent, {
    maxWidth: "100%",
    data:{
      id:idP,
      name:'',
      description:'',
      dateDebut:'',
      dateFin:''
    }
  });
  dialogRef.afterClosed().subscribe(result=>{
    setTimeout(() => {
      this.retrieveProjects();
    }, 1000);

  })
}*/

}
