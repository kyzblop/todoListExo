import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  isAuth: boolean = false;

  login() {
    setTimeout(() => {
      this.isAuth = true;
      this.router.navigate(['todolist']);
    }, 5000);
  }

  logout() {
    this.isAuth = false;
    this.router.navigate(['login']);
  }
}
