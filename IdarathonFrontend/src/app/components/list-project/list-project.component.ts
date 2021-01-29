import { UpdateProjectComponent } from './../update-project/update-project.component';
import { AddProjectComponent } from './../add-project/add-project.component';
import { ProjetServiceService } from './../../services/projet-service.service';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DeleteProjectComponent } from '../delete-project/delete-project.component';
export interface Project {
  id:number;
  name: string;
  description:string;
  dateDebut:Date;
  dateFin: Date;
  currentPercent:number;
  nbrPhases:number;
  nbrTaches:number;
}

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.css']
})

export class ListProjectComponent implements OnInit {
  projects:Project[]=[];
  displayedColumns: string[] = ['name', 'dateDebut', 'dateFin', 'nbrPhases','nbrTaches','currentPercent','Actions'];
  dataSource=new MatTableDataSource<Project>();
  @ViewChild(MatSort) sort:MatSort;
  @ViewChild(MatPaginator) paginator

  constructor(private changeDetectorRefs: ChangeDetectorRef,private projetServ:ProjetServiceService,public addDialog:MatDialog,public updateDialog:MatDialog,public deleteDialog:MatDialog){
    this.sort=new MatSort();
  }

   ngOnInit(): void {
    this.retrieveProjects();
  }

  applyFilter(filterValue: string): void{
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

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
  }


   retrieveProjects() {
     this.projetServ.getAll()
      .subscribe(
        data => {
          this.projects=data;
          this.dataSource=new MatTableDataSource<Project>(this.projects);
          this.changeDetectorRefs.detectChanges();
          this.dataSource.sort=this.sort;
          this.dataSource.paginator=this.paginator;
        },
        error => {
          console.log(error);
        });
  }
}
