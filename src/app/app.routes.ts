import { Routes } from '@angular/router';
import { TodolistComponent } from './components/todolist/todolist.component';
import { LoginComponent } from './components/login/login.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
  { path: 'todolist', component: TodolistComponent },
  { path: 'todolist/:id', component: TaskDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: '404', component: NotFoundComponent },
  { path: '', redirectTo: 'todolist', pathMatch: 'full' },
  { path: '**', redirectTo: '404' },
];
