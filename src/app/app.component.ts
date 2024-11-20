import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskComponent } from './components/task/task.component';
import { FormsModule } from '@angular/forms';
import { Task } from './class/task.model';
import { CommonModule, DatePipe } from '@angular/common';
import { resolve } from 'node:path';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TaskComponent,
    FormsModule,
    CommonModule
    
  ],
  providers: [DatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todoListExo';

  /*
  name1:string = "Truc"
  name2:string = "Machin"
  name3:string = "Bidule"

  taskComplete1:boolean = false
  taskComplete2:boolean = false
  taskComplete3:boolean = false
  */

  compteur:number = 0
  completion: number = 0 // en %

  promesseRemplirTaches!: Promise<string>

  tasks:Task[] = []

  constructor() {}

  ngOnInit() {

    this.recupererDonnees()

  }

  majCompteur(isPlus: boolean): void {
    if(isPlus){
      this.compteur += 1
    } else {
      this.compteur -= 1
    }
    this.completion = (this.compteur / this.tasks.length) * 100
  }

  
  recupererDonnees() {

    return new Promise((resolve) => {

      console.log("debut de l'attente")

      setTimeout(() => {

        // this.tasks.push(new Task(4, "Faire la vaisselle", false, "Frotter les assiettes"))
        this.tasks.push(new Task(5, "Faire a manger", false, "Cuire les patates"))
        this.tasks.push(new Task(6, "Faire le menage", false, "Passer l'aspi"))

        resolve('Les données sont bien récupérées')
        console.log("fin attente")
        
      }, 3000);

    })


  }
  
  
  

  
}
