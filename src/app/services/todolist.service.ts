import { inject, Injectable } from '@angular/core';
import { Task } from '../class/task.model';
import { BehaviorSubject, Observable } from 'rxjs';

const initialList = [
  new Task(1, 'Faire le ménage', false, "Passer l'aspirateur"),
  new Task(2, 'Faire à manger', false, 'Cuire les patates'),
  new Task(3, 'Sortir la poubelle', false, 'Trier les dechets'),
  new Task(4, 'Promener le chien', false, 'Aller au parc'),
];

@Injectable({
  providedIn: 'root',
})
export class TodolistService {
  private list: Task[] = [];
  private _tasks: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>([]);
  private readonly tasks$: Observable<Task[]> = this._tasks.asObservable();

  constructor() {
    // Initialisation de la liste avec la liste par défaut
    this.updateList(initialList);
  }

  // Récupération d'une liste pour la mettre dans notre liste
  public async updateList(listTask: Task[]) {
    this.list = await new Promise<Task[]>((resolve, reject) => {
      try {
        resolve(listTask);
      } catch (error) {
        reject("La liste n'est pas récupérée par la Promesse du service");
      }
    });

    // Ajout de notre liste dans le BehaviorSubject
    this.emitter(this.list);
  }

  // Gestion du changement de valeur de completed
  toggleComplete(id: number) {
    let task: Task | undefined = this.list.find((task) => task.id == id);
    if (task !== undefined) {
      task.completed = !task.completed;
      this.emitter(this.list);
    }
  }

  // Recupération de la tache selon son id
  getTaskById(id: number): Task | undefined {
    return this.list.find((task) => task.id == id);
  }

  // Récupération de la liste de tâches dans un observable
  getTasks(): Observable<Task[]> {
    return this.tasks$;
  }

  // Emission de la liste de tâche mise à jour
  emitter(data: Task[]): void {
    this._tasks.next(Object.assign([], data));
  }

  // Ajout d'une tache
  addTask(task: Task): void {
    this.list.push(task);
    this.emitter(this.list);
  }

  getLastId(): number {
    if (this.list.length > 0) {
      return this.list.slice(-1)[0].id;
    } else {
      return 0;
    }
  }
}
