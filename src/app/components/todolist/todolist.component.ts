import { Component } from '@angular/core';
import { Task } from '../../class/task.model';
import { TodolistService } from '../../services/todolist.service';
import { CommonModule, DatePipe } from '@angular/common';
import { TaskComponent } from '../task/task.component';
import { FormsModule } from '@angular/forms';
import confetti from 'canvas-confetti';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [TaskComponent, FormsModule, CommonModule, RouterLink],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css',
})
export class TodolistComponent {
  compteur: number = 0;
  completion: number = 0; // en %

  chargementList: boolean = false;

  promesseRemplirTaches!: Promise<string>;

  tasks: Task[] = [];

  constructor(public todolistService: TodolistService) {
    this.promesseRemplirTaches = new Promise((resolve, reject) => {
      this.chargementList = true;
      setTimeout(() => {
        try {
          this.getTasks();
          resolve('Les données sont bien récupérées');
          this.chargementList = false;
        } catch (error) {
          reject('Les données ne sont pas récupérées');
        }
        this.compteur = this.tasks.filter((task) => task.completed).length;
        this.completion = (this.compteur / this.tasks.length) * 100;
      }, 3000);
    });
  }

  majCompteur(isPlus: boolean): void {
    if (isPlus) {
      this.compteur += 1;
    } else {
      this.compteur -= 1;
    }

    this.completion = (this.compteur / this.tasks.length) * 100;

    if (this.completion == 100) {
      confetti({
        particleCount: 100,
        spread: 100,
        origin: { x: 0, y: 1 },
      });
      confetti({
        particleCount: 100,
        spread: 100,
        origin: { x: 1, y: 1 },
      });
    }
  }

  getCompletion(): string {
    return `width: ${this.completion}%`;
  }

  getTasks(): void {
    this.todolistService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }
}
