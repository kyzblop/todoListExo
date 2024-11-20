import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isAuth: boolean = false

  login() {
    setTimeout(() => {
      this.isAuth = true
    }, 5000);
  }

  logout() {
    this.isAuth = false
  }
}
