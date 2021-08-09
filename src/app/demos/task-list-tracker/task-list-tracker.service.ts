import { Injectable } from '@angular/core';

import { List } from './shared/classes/list';

@Injectable({
  providedIn: 'root'
})
export class TaskListTrackerService {

  private readonly localStorageListKey = 'lists';

  constructor() { }

  public saveToLocalStorage(lists: List[]): void {
    localStorage.setItem(this.localStorageListKey, JSON.stringify(lists));
  }

  public retrieveFromLocalStorage(): List[] {
    return JSON.parse(localStorage.getItem(this.localStorageListKey) || '[]');
  }
  
  public resetData(): void {
    localStorage.clear();
  }
}
