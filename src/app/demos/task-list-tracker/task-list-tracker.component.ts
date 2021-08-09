import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { MatDialog } from '@angular/material/dialog';

import { ManageListDialogComponent } from './manage-list-dialog/manage-list-dialog.component';
import { ManageTaskDialogComponent } from './manage-task-dialog/manage-task-dialog.component';

import { TaskListTrackerService } from './task-list-tracker.service';

import { List } from './shared/classes/list';
import { Task } from './shared/classes/task';

@Component({
  selector: 'jsj-task-list-tracker',
  templateUrl: './task-list-tracker.component.html',
  styleUrls: ['./task-list-tracker.component.scss']
})
export class TaskListTrackerComponent implements OnInit, OnDestroy {

  public allLists: List[] = [];
  public selectedList: List | null = null;

  private subscriptions: Subscription[] = [];

  constructor(
    private dialog: MatDialog,
    private taskListTrackerService: TaskListTrackerService,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  public ngOnInit(): void {
    this.allLists = this.taskListTrackerService.retrieveFromLocalStorage();
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  public onListClick(list: List): void {
    this.selectedList = list;
  }

  public onAddNewList(): void {
    let dialogRef = this.dialog.open(ManageListDialogComponent, {
      data: {
        currentLists: this.allLists
      }
    });

    this.subscriptions.push(
      dialogRef.afterClosed().subscribe(result => {
        if(result){
          this.selectedList = this.allLists[this.allLists.length -1]; // grab newly created list
          this.changeDetectorRef.detectChanges();
        }
      })
    )
  }

  public onAddNewTask(): void {
    const selectedListIndex = this.allLists.findIndex(l => l.id === this.selectedList?.id);
    if(selectedListIndex >= 0){
      this.dialog.open(ManageTaskDialogComponent, {
        data: {
          currentLists: this.allLists,
          activeListIndex: selectedListIndex
        }
      });
    } else {
      throw('Error: No list selected');
    }
  }

  public isListSelected(list: List): boolean {
    if(this.selectedList){
      return this.selectedList.id === list.id;
    }
    return false;
  }
  
  public onEditTask(task: Task): void {
    const selectedListIndex = this.allLists.findIndex(l => l.id === this.selectedList?.id);
    if(selectedListIndex >= 0){
      this.dialog.open(ManageTaskDialogComponent, {
        data: {
          currentLists: this.allLists,
          activeListIndex: selectedListIndex,
          editTask: task
        }
      });
    } else {
      throw('Error: No list selected');
    }
  }

  public onDeleteTask(task: Task): void {
    if(this.selectedList) {
      const taskIndex = this.selectedList.tasks.findIndex(t => t.id === task.id);
      if(taskIndex >= 0) {
        this.selectedList.tasks.splice(taskIndex, 1);
        this.saveList();
      }
    }
  }

  public onTaskClick(task: Task): void {
    if(this.selectedList){
      task.isCompleted = !task.isCompleted;
      this.saveList();
    }
  }

  public onEditList(): void {
    const listIdx = this.allLists.findIndex(l => l.id === this.selectedList?.id);
    if(listIdx >= 0) {
      this.dialog.open(ManageListDialogComponent, {
        data: {
          currentLists: this.allLists,
          editIndex: listIdx
        }
      });
    }
  }

  public onDeleteList(): void {
    const listIdx = this.allLists.findIndex(l => l.id === this.selectedList?.id);
    if(listIdx >= 0) {
      this.allLists.splice(listIdx, 1);
      this.selectedList = null;
      this.saveList();
    }
  }

  public onResetData(): void {
    this.selectedList = null;
    this.allLists = [];
    this.taskListTrackerService.resetData();
  }

  public onRandomizeData(): void {
    this.onResetData()
    this.generateSampleLists();
    this.saveList();
  }

  private saveList(): void {
    this.taskListTrackerService.saveToLocalStorage(this.allLists);
  }

  private generateSampleLists(): void {
    const name = 'Test List ';
    
    for(let i = 0; i < 4; i++){
      const list = new List();
      list.name = name + (i + 1).toString();
      list.tasks = this.generateSampleTasks();

      this.allLists.push(list);
    }
  }

  private generateSampleTasks(): Task[] {
    const minRand = 1;
    const maxRand = 20;
    const taskCount: number = Math.floor(Math.random() * (maxRand - minRand) + minRand);

    const name = 'New Task ';

    const allTasks: Task[] = [];

    for(let i = 0; i < taskCount; i++){
      const task = new Task();
      task.name = name + (i + 1).toString();

      allTasks.push(task);
    }

    return allTasks;
  }

}
