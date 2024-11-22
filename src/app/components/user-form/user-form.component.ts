import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../class/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css',
})
export class UserFormComponent {
  userForm: FormGroup;
  userAjout: User;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {
    this.userForm = formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      team: ['', [Validators.required]],
      skills: [''],
    });

    this.userAjout = {
      id: 0,
      firstName: '',
      lastName: '',
      email: '',
      team: '',
      skills: [],
    };
  }

  onSubmit() {
    this.userAjout = this.userForm.value;
    this.userAjout.id = this.userService.getLastId() + 1;
    this.userService.addUser(this.userAjout);
    this.router.navigate(['users']);
  }
}
