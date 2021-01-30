import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {RoulementService} from '../../services/roulement.service';
import {User} from '../../Models/User';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {UpdateRoulementComponent} from '../update-roulement/update-roulement.component';
import {AfficherAutorisationsComponent} from '../afficher-autorisations/afficher-autorisations.component';
// import {PeriodicElement} from './PeriodicElement';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';


@Component({
  selector: 'app-roulement',
  templateUrl: './roulement.component.html',
  styleUrls: ['./roulement.component.css']
})
export class RoulementComponent implements OnInit, AfterViewInit {
 /* ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
*/



  ////////////// DECLARATIONS

  displayedColumns: string[] = ['selected', 'Nom et Prenom', 'Service', 'Profile', 'Poste', 'Mode de Travail', 'En Ligne', 'Autorisations'];
  // @ts-ignore
  selectedUser: User ;
  users: User[];
  selected = false;
  dataSource = new MatTableDataSource<User>();
  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;
  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;

  statPRES = 0;
  statDIS = 0;
  statROUL = 0;
  statAUT = 0;

  //////////////////// CONSTRUCTOR

  constructor(public roulementService: RoulementService, public dialog: MatDialog) {
    this.users = [];
    // this.sort = new MatSort();
    // this.paginator= new MatPaginator();

  }

///////////////////// INITIALISATION
  ngOnInit(): void {
    this.getUsers();
  }
  ngAfterViewInit(): void  {
    this.dataSource.paginator = this.paginator;
  }

////////////////////// MEETHODES
  openRoulementDialog(): void {
    if (this.selected){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.autoFocus = true;
      dialogConfig.width = '20%';
      dialogConfig.panelClass = 'backdropBackground';

      dialogConfig.data = this.selectedUser;
      const dialogRef = this.dialog.open(UpdateRoulementComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(c => {
        this.getStasts();
      });
    }

  }

  openAutorisationDialog(id: number): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.panelClass = 'backdropBackground';

    dialogConfig.width = '60%';
    // @ts-ignore
    dialogConfig.data = this.users.find(c => c.id === id);
    // @ts-ignore
    console.log('before: ' + this.users.find(c => c.id === id));

    this.dialog.open(AfficherAutorisationsComponent, dialogConfig);
  }
   applyFilter(filterValue: string): void{
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    console.log(filterValue);
    this.dataSource.filter = filterValue;
  }
  selectUser(u: User): void{
    this.selectedUser = u;
    this.selected = true;
    console.log(this.selectedUser);
  }
  public getUsers(): void{
    this.roulementService.getUsers().subscribe(c => {
        this.users = c;
        this.dataSource = new MatTableDataSource<User>(this.users);
        this.selectedUser = this.users[0];
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.getStasts();


    });
  }
  public resetStats(): void{
    this.statPRES = 0;
    this.statDIS = 0;
    this.statROUL = 0;
    this.statAUT = 0;
  }
  public getStasts(): void{
    this.resetStats();
    this.users.forEach(c => {
      if (c.roulement.mode === 'Presentiel') { this.statPRES++; }
      else if (c.roulement.mode === 'Distantiel') { this.statDIS++; }
      else if (c.roulement.mode === 'Roulement') { this.statROUL++; }
     // if (c.autorisations.length > 0) { this.statAUT++; }
    });

}

}
