import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/authservice.service';
import { first } from 'rxjs/operators';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email: string = '';
  password:string = '';
  constructor(private auth:AuthService) { }

  ngOnInit() {
  }

  login(){
    this.auth.requestLogin(this.email, this.password)
    .pipe(first()).subscribe(data=> {
      //Todo reroute to home component
    }) 

  }
}
