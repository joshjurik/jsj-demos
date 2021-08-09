import { Component, OnInit } from '@angular/core';

import { NestedTableAccordionService } from './nested-table-accordion.service';

import { Activity } from './shared/classes/activity';

@Component({
  selector: 'jsj-nested-table-accordion',
  templateUrl: './nested-table-accordion.component.html',
  styleUrls: ['./nested-table-accordion.component.scss']
})
export class NestedTableAccordionComponent implements OnInit {
  public currentHeading: string[] = [];
  public completedHeading: string[] = [];

  public currentList: Activity[] = [];
  public completedList: Activity[] = [];

  public isCurrent = true;

  constructor(
    private nestedTableAccordionService: NestedTableAccordionService
  ) {
  }

  public ngOnInit(): void {
    this.currentHeading = this.nestedTableAccordionService.getCurrentHeadings();
    this.completedHeading = this.nestedTableAccordionService.getCompletedHeadings();
    this.currentList = this.nestedTableAccordionService.getCurrentSampleList();
    this.completedList = this.nestedTableAccordionService.getCompletedSampleList();
  }

  public getColumnHeadings(): string[] {
    if(this.isCurrent){
      return this.currentHeading;
    }
    return this.completedHeading;
  }

  public getActivityData(): Activity[] {
    if(this.isCurrent){
      return this.currentList;
    }
    return this.completedList;
  }

  public switchState(): void {
    this.isCurrent = !this.isCurrent;
  }

  public switchShowExtra(activity: Activity): void {
    // set state before we reset any previously open
    const isOpen = activity.showExtra;
    // close any already open
    if(this.isCurrent){
      this.currentList.map(c => c.showExtra = false);
    } else {
      this.completedList.map(c => c.showExtra = false);
    }

    // set current act state
    activity.showExtra = !isOpen;
  }
}
