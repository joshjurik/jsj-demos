import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemosComponent } from './demos/demos.component';
import { NestedTableAccordionComponent } from './demos/nested-table-accordion/nested-table-accordion.component';
import { TaskListTrackerComponent } from './demos/task-list-tracker/task-list-tracker.component';

const routes: Routes = [
  { path: '', component: DemosComponent },
  {
    path: 'task-list-tracker',
    component: TaskListTrackerComponent,
    loadChildren: () => import('./demos/task-list-tracker/task-list-tracker.module')
    .then(m => m.TaskListTrackerModule)
  },
  {
    path: 'nested-table-accordion',
    component: NestedTableAccordionComponent,
    loadChildren: () => import('./demos/nested-table-accordion/nested-table-accordion.module')
    .then(m => m.NestedTableAccordionModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
