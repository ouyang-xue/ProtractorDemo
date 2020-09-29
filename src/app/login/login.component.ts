import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }


  loginData() {
    if (this.username === 'admin' && this.password === '123456') {
      this.router.navigate(['/test']);
    } else {
      window.alert('error username or password');
    }
  }
}
