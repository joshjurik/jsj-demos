import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { List } from '../shared/classes/list';
import { Task } from '../shared/classes/task';
import { TaskListTrackerService } from '../task-list-tracker.service';

@Component({
  selector: 'jsj-manage-list-dialog',
  templateUrl: './manage-list-dialog.component.html',
  styleUrls: ['./manage-list-dialog.component.scss']
})
export class ManageListDialogComponent implements OnInit {

  public newList: List = new List();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { 
      currentLists: List[],
      editIndex: number | undefined
    },
    private dialogRef: MatDialogRef<ManageListDialogComponent>,
    private taskListTrackerService: TaskListTrackerService
  ) { }

  public ngOnInit(): void {
    // explicit check because 0 is falsey
    if(typeof this.data.editIndex !== 'undefined') {
      // angular material dialog apparently dynamically casts the obj
      // so it 'loses its type' - reinstantiate it here before cloning
      this.data.currentLists[this.data.editIndex] = new List(
        this.data.currentLists[this.data.editIndex].id,
        this.data.currentLists[this.data.editIndex].name,
        this.data.currentLists[this.data.editIndex].tasks.map(t => t =
          new Task(t.id, t.name, t.isCompleted)
        )
      );

      this.newList = this.data.currentLists[this.data.editIndex].clone();
    }
  }

  public onCancel(): void {
    this.dialogRef.close();
  }

  public onSaveList(): void {
    // explicit check because 0 is falsey
    if(typeof this.data.editIndex !== 'undefined'){
      // edit
      this.data.currentLists[this.data.editIndex] = this.newList;
    } else {
      // save
      this.data.currentLists.push(this.newList);
    }

    this.taskListTrackerService.saveToLocalStorage(this.data.currentLists);
    this.dialogRef.close('saved');
  }

}
