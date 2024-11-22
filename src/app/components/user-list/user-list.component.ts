import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../../class/user.model';
import { UserService } from '../../services/user.service';
import { Subscription } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent implements OnInit, OnDestroy {
  users: User[] = [];

  private souscription: Subscription = new Subscription();

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.souscription = this.userService.getUsers$().subscribe((users) => {
      this.users = users;
    });
  }

  ngOnDestroy(): void {
    this.souscription.unsubscribe();
  }
}
