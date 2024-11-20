import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { Task } from '../../class/task.model';
import { AsyncPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    FormsModule,
    MatButtonModule,
    AsyncPipe
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  @Input()
  task: Task = new Task(0, "Task par defaut", false, "Truc à faire");

  @Output()
  miseAJourComplete = new EventEmitter<boolean>();


  constructor(private datePipe : DatePipe) {}


  getComplete(): string {

    if(this.task.completed) {
      return "Terminée"
    } else {
      return "En cours"
    }
  }

  getBadgeVariant(): string {
    if(this.task.completed) {
      return 'd-inline float-right badge text-bg-success'
    } else {
      return 'd-inline float-right badge text-bg-warning'
    }
  }

  getItemVariant() : string {
    if(this.task.completed) {
      return 'list-group-item list-group-item-success'
    } else {
      return 'list-group-item list-group-item-warning'
    }
  }

  toggleComplete() : void {
    this.task.completed = !this.task.completed
    this.miseAJourComplete.emit(this.task.completed)
  }

  getButtonText() : string {
    if(this.task.completed) {
      return "Annuler"
    } else {
      return "Terminer"
    }
  }

  formatDate(date: Date) : string | null {
    return this.datePipe.transform(date, 'fullDate')
  }



}