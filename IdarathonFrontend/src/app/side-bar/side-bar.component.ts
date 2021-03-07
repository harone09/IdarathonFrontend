import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {User} from '../Models/User';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
   connectedUser: User = JSON.parse( localStorage.getItem('User') as string);
  constructor(private breakpointObserver: BreakpointObserver) {}


  logout(): void{
    localStorage.clear();
  }
}
