import { Injectable } from '@angular/core';
import { User } from '../class/user.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {
    this.emitter(this.users);
  }

  private users: User[] = [
    new User(1, 'Malo', 'Saint', 'malo@gmail.com', 'Aqua', [
      'Natation',
      'Lutte',
      'Anglais',
    ]),
  ];

  private _users: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  private readonly users$: Observable<User[]> = this._users.asObservable();

  emitter(data: User[]) {
    this._users.next(Object.assign([], data));
  }

  addUser(user: User) {
    this.users.push(user);
    this.emitter(this.users);
  }

  getUsers$(): Observable<User[]> {
    return this.users$;
  }

  getLastId(): number {
    if (this.users.length > 0) {
      return this.users.slice(-1)[0].id;
    } else {
      return 0;
    }
  }
}
