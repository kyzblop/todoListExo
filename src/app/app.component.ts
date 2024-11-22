import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { Location } from '@angular/common';
import { filter } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, ReactiveFormsModule],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'todoListExo';

  is404: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // let routeString = window.location.href;

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        let currentUrl = this.router.url;

        if (currentUrl == '/404') {
          this.is404 = true;
        }
      });
  }
}
