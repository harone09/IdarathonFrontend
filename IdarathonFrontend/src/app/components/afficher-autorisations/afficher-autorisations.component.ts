import {AfterViewInit, Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {RoulementComponent} from '../roulement/roulement.component';
// import {RoulemmentDialog} from '../../Models/RoulemmentDialog';
import {User} from '../../Models/User';
import {MatTableDataSource} from '@angular/material/table';
import {Autorisation} from '../../Models/Autorisation';
import {RoulementService} from '../../services/roulement.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-afficher-autorisations',
  templateUrl: './afficher-autorisations.component.html',
  styleUrls: ['./afficher-autorisations.component.css']
})
export class AfficherAutorisationsComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['Autorisation', 'motif', 'DateDebut', 'DateFin'];
  dataSource = new MatTableDataSource<Autorisation>();
  // @ts-ignore
  auts: Autorisation[];

  constructor(public router: Router, public dialogRef: MatDialogRef<RoulementComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Autorisation[], public roulementService: RoulementService) {
  }

  ngOnInit(): void {
    if (localStorage.getItem('User') == null) {
      this.router.navigate(['/login']);
    }
    this.getAuts();


  }

  ngAfterViewInit(): void  {

  }
  applyFilter(filterValue: string): void{
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    console.log(filterValue);
    this.dataSource.filter = filterValue;
  }
  getAuts(): void{

      this.auts = this.data;
      this.dataSource = new MatTableDataSource<Autorisation>(this.auts);


  }

}
