import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule  } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';

import { FlatButtonModule, RoundButtonModule } from 'jsj-components';

import { TaskListTrackerComponent } from './task-list-tracker.component';
import { TaskCardComponent } from './task-card/task-card.component';
import { ManageListDialogComponent } from './manage-list-dialog/manage-list-dialog.component';
import { ManageTaskDialogComponent } from './manage-task-dialog/manage-task-dialog.component';

@NgModule({
  declarations: [
    TaskListTrackerComponent,
    TaskCardComponent,
    ManageListDialogComponent,
    ManageTaskDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    FlatButtonModule,
    RoundButtonModule
  ]
})
export class TaskListTrackerModule { }
