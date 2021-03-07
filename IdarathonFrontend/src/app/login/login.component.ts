import { Component, OnInit } from '@angular/core';
import { RestApiLoginService } from '../services/rest-api-login.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../Models/User';
import {AuthRequest} from '../Models/AuthRequest';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ///////////////////////////////// Constructor


  constructor(private loginService: RestApiLoginService, public router: Router) { }
///////////////////////////// Declaration
  req: AuthRequest | undefined;
  public loginForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
});
///////////////////////////////////

  //////////////////////////////// Methodes

  ngOnInit(): void {
    if (localStorage.getItem('User') != null) {
      this.router.navigate(['/home']);
    }


  }
  public signIn(): void {
   this.req = {
     username : this.loginForm.get('username')?.value,
     password: this.loginForm.get('password')?.value
   };

   this.loginService.signIn(this.req).subscribe(m => {
      console.log(m);
      localStorage.setItem('User', JSON.stringify(m.user));
      localStorage.setItem('JwtToken', JSON.stringify(m.jwt));
      this.router.navigate(['/home']);
    });

  }

  ////////////////////////////////

  disabled(): boolean {
    return (this.loginForm.get('email')?.value === '' || this.loginForm.get('password')?.value === '');
  }

  /////////////////////////////////////
  checkSession(): boolean {
    return (localStorage.getItem('User') != null);
  }


  /////////////////////////////////////

}
