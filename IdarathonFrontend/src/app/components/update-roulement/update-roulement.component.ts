import { Component, OnInit, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {RoulementComponent} from '../roulement/roulement.component';
import {User} from '../../Models/User';
// import {RoulemmentDialog} from '../../Models/RoulemmentDialog';
import {FormControl, FormGroup} from '@angular/forms';
import {RoulementService} from '../../services/roulement.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-update-roulement',
  templateUrl: './update-roulement.component.html',
  styleUrls: ['./update-roulement.component.css']
})
export class UpdateRoulementComponent implements OnInit {

  enRoulement = false;
  modes = [
    {id: 1, value: 'Presentiel'},
    {id: 2, value: 'Distantiel'},
    {id: 3, value: 'Roulement'}
    ];
  roulements = [
    {id: 1, value: '1j'},
    {id: 2, value: '2j'},
    {id: 3, value: '3j'},
    {id: 4, value: '4j'}
  ];
  form: FormGroup = new FormGroup({
    mode: new FormControl(this.data.roulement.mode),
    roulement: new FormControl(this.data.roulement.roulement.toString()),
    date: new FormControl(this.data.roulement.date)
  });
  constructor(public router: Router, public dialogRef: MatDialogRef<RoulementComponent>,
              @Inject(MAT_DIALOG_DATA) public data: User, public roulementService: RoulementService) { }

  onNoClick(): void {
    this.dialogRef.close();

  }

  onSave(): void{
    this.data.roulement.mode =  this.form.get('mode')?.value;
    this.data.roulement.roulement = this.form.get('roulement')?.value;
    this.data.roulement.date = this.form.get('date')?.value;
    this.roulementService.updateUser(this.data).subscribe(c => {
    });
    this.dialogRef.close();

  }
  ngOnInit(): void {
    if (localStorage.getItem('User') == null) {
      this.router.navigate(['/login']);
    }
    console.log(this.data);
  }

}
