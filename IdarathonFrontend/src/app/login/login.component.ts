import { Component, OnInit } from '@angular/core';
import { RestApiLoginService } from '../services/rest-api-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username!: string;
  password!: string;
  message:any

  constructor(private service:RestApiLoginService) { }

  ngOnInit(): void {
  }
  doLogin(){
    let resp =this.service.login(this.username,this.password);
    resp.subscribe(data=>{
      console.log(data)
    })
  }
}
