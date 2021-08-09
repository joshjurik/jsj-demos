import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemosComponent } from './demos/demos.component';
import { DemoCardComponent } from './demos/demo-card/demo-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskListTrackerModule } from './demos/task-list-tracker/task-list-tracker.module';

@NgModule({
  declarations: [
    AppComponent,
    DemosComponent,
    DemoCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    TaskListTrackerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
