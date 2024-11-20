import { Injectable } from '@angular/core';
import { Task } from '../class/task.model';


const initialList = [
  new Task(1, "Faire le ménage", false, "Passer l'aspirateur"),
  new Task(2, "Faire à manger", false, "Cuire les patates"),
  new Task(3, "Sortir la poubelle", false, "Trier les dechets"),
  new Task(4, "Promener le chien", false, "Aller au parc")
]

@Injectable({
  providedIn: 'root'
})

export class TodolistService {

  list : Task[]=[]

  constructor() {
    this.updateList(initialList)
  }

  async updateList(listTask: Task[]) {
    this.list = await new Promise<Task[]>((resolve, reject) => {
      try {
        resolve(listTask)
      } catch (error) {
        reject("La liste n'est pas récupérée par la Promesse du service")
      }
    })
  }

  toggleComplete(id:number) {
    const task = this.list.find(task => task.id == id)
    if(task !== undefined) {
      task.completed = !task.completed
    }
  }
}
