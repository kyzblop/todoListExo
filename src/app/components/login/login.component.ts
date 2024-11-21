import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  isClicked: boolean = false;

  constructor(public auth: AuthService) {}

  connexion() {
    this.auth.login();
    console.log('connexion ...');
    this.isClicked = true;
  }
}
