import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../shared/classes/task';

@Component({
  selector: 'jsj-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent implements OnInit {

  @Input() task: Task | null = null;

  @Output() editTask: EventEmitter<void> = new EventEmitter();
  @Output() deleteTask: EventEmitter<void> = new EventEmitter();
  @Output() taskClick: EventEmitter<void> = new EventEmitter();

  constructor() { }

  public ngOnInit(): void {
  }

  /**
   * Sets the isCompleted state of a task
   * @return - void
   */
  public onTaskClick(): void {
    this.taskClick.emit();
    // if(this.task){
    //   this.task.isCompleted = !this.task.isCompleted;
    // } else {
    //   throw('Error: No task exists to set isCompleted flag'); 
    // }
  }

  /**
   * Enables the ability to edit a task name
   * @param Event event - click event of the button
   * @return - void
 */
  public onEditTaskClick(event: Event): void {
    // stop the mat-card click event from triggering
    // when button inside the card is clicked
    event.stopPropagation();
    this.editTask.emit();
  }

  public onDeleteTaskClick(event: Event): void {
    // stop the mat-card click event from triggering
    // when button inside the card is clicked
    event.stopPropagation();
    this.deleteTask.emit();
  }

}
