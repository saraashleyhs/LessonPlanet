import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/authservice.service';
import { first } from 'rxjs/operators';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  public email: string = '';
  password:string = '';
  constructor(private auth: AuthService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: '',
      password: ''
    });
  }

  onSubmit(loginData) {
    if (this.loginForm.invalid) {
      return;
    }
    this.auth.requestLogin(this.email, this.password)
    .pipe(first())
    .subscribe(
      data => {
      this.router.navigateByUrl('/');
      // Todo reroute to home component
    },
    error => {
      console.error('Error', error);
    }
    );

  }
}
