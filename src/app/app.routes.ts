import { Routes } from '@angular/router';
import { TodolistComponent } from './components/todolist/todolist.component';
import { LoginComponent } from './components/login/login.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { authGuard } from './guards/auth.guard';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';

export const routes: Routes = [
  { path: 'todolist', component: TodolistComponent, canActivate: [authGuard] },
  {
    path: 'todolist/:id',
    component: TaskDetailsComponent,
    canActivate: [authGuard],
  },
  { path: 'addTask', component: TaskFormComponent },
  { path: 'users', component: UserListComponent },
  { path: 'addUser', component: UserFormComponent },
  { path: 'login', component: LoginComponent },
  { path: '404', component: NotFoundComponent },
  { path: '', redirectTo: 'todolist', pathMatch: 'full' },
  { path: '**', redirectTo: '404' },
];
