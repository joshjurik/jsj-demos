import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { List } from '../shared/classes/list';
import { Task } from '../shared/classes/task';
import { TaskListTrackerService } from '../task-list-tracker.service';


@Component({
  selector: 'jsj-manage-task-dialog',
  templateUrl: './manage-task-dialog.component.html',
  styleUrls: ['./manage-task-dialog.component.scss']
})
export class ManageTaskDialogComponent implements OnInit {

  public newTask: Task = new Task();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { 
      currentLists: List[],
      activeListIndex: number,
      editTask: Task | null
    },
    private dialogRef: MatDialogRef<ManageTaskDialogComponent>,
    private taskListTrackerService: TaskListTrackerService
  ) { }

  public ngOnInit(): void {
    if(this.data.editTask){
      this.newTask = this.data.editTask;
    }
  }

  public onCancel(): void {
    this.dialogRef.close();
  }

  public onSaveTask(): void {
    if(this.data.editTask){
      // edit
      const taskIdx = this.data.currentLists[this.data.activeListIndex].tasks.findIndex(t => t.id === this.data?.editTask?.id);
      if(taskIdx >= 0){
        this.data.currentLists[this.data.activeListIndex].tasks[taskIdx] = this.newTask;
      }
    } else {
      // save new
      this.getCurrentList().tasks.push(this.newTask);
    }
    this.taskListTrackerService.saveToLocalStorage(this.data.currentLists);
    this.dialogRef.close('saved');
  }

  public getCurrentList(): List {
    return this.data.currentLists[this.data.activeListIndex];
  }
}
