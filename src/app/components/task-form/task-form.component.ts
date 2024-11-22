import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TodolistService } from '../../services/todolist.service';
import { Task } from '../../class/task.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css',
})
export class TaskFormComponent {
  constructor(
    private todolistService: TodolistService,
    private router: Router
  ) {}

  onSubmit(data: NgForm) {
    this.todolistService.addTask(
      new Task(
        this.todolistService.getLastId() + 1,
        data.value.title,
        data.value.completed,
        data.value.description,
        new Date()
      )
    );
    let id = this.todolistService.getLastId() + 1;
    console.log(data.value.completed);
    console.log('id' + id);
    this.router.navigate(['/todolist']);
  }
}
