import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css',
})
export class LogoutComponent {
  // isAuth: boolean = false

  constructor(public auth: AuthService) {
    // this.isAuth = auth.isAuth
  }

  deconnexion() {
    this.auth.logout();
    // this.isAuth = this.auth.isAuth
  }
}
