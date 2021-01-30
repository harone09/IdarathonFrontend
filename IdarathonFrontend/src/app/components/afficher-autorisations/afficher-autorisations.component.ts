import {AfterViewInit, Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {RoulementComponent} from '../roulement/roulement.component';
// import {RoulemmentDialog} from '../../Models/RoulemmentDialog';
import {User} from '../../Models/User';
import {MatTableDataSource} from '@angular/material/table';
import {Autorisation} from '../../Models/Autorisation';
import {RoulementService} from '../../services/roulement.service';

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

  constructor(public dialogRef: MatDialogRef<RoulementComponent>,
              @Inject(MAT_DIALOG_DATA) public data: User, public roulementService: RoulementService) {
  }

  ngOnInit(): void {

    this.getAuts(this.data.id);


  }

  ngAfterViewInit(): void  {

  }
  applyFilter(filterValue: string): void{
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    console.log(filterValue);
    this.dataSource.filter = filterValue;
  }
  getAuts(id: number): void{
    this.roulementService.getUserAuts(id).subscribe(c => {
      this.auts = c;
      console.log(c);
      this.dataSource = new MatTableDataSource<Autorisation>(this.auts);

    });
  }

}
