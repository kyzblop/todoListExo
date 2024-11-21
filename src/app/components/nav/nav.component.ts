import { Component } from '@angular/core';
import { LogoutComponent } from '../logout/logout.component';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [LogoutComponent, RouterLink, RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  constructor(router: Router) {}
}
