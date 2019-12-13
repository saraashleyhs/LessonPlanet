import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}
  logOut() {
    this.authService.logout();
    this.router.navigateByUrl('login');
  }
}
