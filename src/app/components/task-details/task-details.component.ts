import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodolistService } from '../../services/todolist.service';
import { Task } from '../../class/task.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task-details',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './task-details.component.html',
  styleUrl: './task-details.component.css',
})
export class TaskDetailsComponent implements OnInit {
  task?: Task;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private todoListService: TodolistService
  ) {}

  ngOnInit(): void {
    let stringId: string | null = this.route.snapshot.paramMap.get('id');
    let id: number = stringId == null ? -1 : +stringId;

    let taskRecup = this.todoListService.list.find((task) => task.id == id);
    if (taskRecup) {
      this.task = this.todoListService.getTaskById(id);
    } else {
      this.router.navigate(['404']);
    }
  }
}
