import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  isAuth: boolean = false

  constructor(private auth : AuthService) {
    this.isAuth = auth.isAuth
  }

  connexion() {
    this.auth.login()
  }

}
