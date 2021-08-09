import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { Activity } from './shared/classes/activity';

@Injectable({
  providedIn: 'root'
})
export class NestedTableAccordionService {

  private currentList: Activity[] = [];
  private completedList: Activity[] = [];

  constructor() { }

  public getCurrentHeadings(): string[] {
    return ['Title', 'Type', 'Status', 'Assignment Type'];
  }

  public getCompletedHeadings(): string[] {
    return ['Title', 'Activity Type', 'Status', 'Date Completed', 'Assignment Type']
  }

  public getCurrentSampleList(): Activity[] {
    this.generateCurrentSampleList();
    return this.currentList;
  }

  public getCompletedSampleList(): Activity[] {
    this.generateCompletedSampleList();
    return this.completedList;
  }

  private generateCurrentSampleList(): void {
    for(let i = 0; i < 5; i++) {
      this.currentList.push(this.generateRandomActivity());
    }
  }

  private generateCompletedSampleList(): void {
    for(let i = 0; i < 9; i++) {
      this.completedList.push(this.generateRandomActivity());
    }
  }

  private generateRandomActivity(): Activity {
    // Sample data to pick from
    const titles: string[] = [
      'Code of Conduct',
      'Employee Handbook',
      'HR Forms',
      'Payroll Setup',
      'Vacation Policy',
      'Getting Started Guide',
      'Company Overview',
      'Quick Tips',
      'FAQs'
    ];
    const activityTypes: string[] = ['Checklist', 'Document-Based', 'Elearning'];
    const statuses: string[] = ['In Progress', 'Not Started', 'Completed'];
    const assignmentTypes: string[] = ['Recommended', 'Required'];

    const act = new Activity();
    act.title = titles[(Math.floor(Math.random() * (10 - 1) + 1)) - 1];
    act.activityType = activityTypes[(Math.floor(Math.random() * (4 - 1) + 1)) - 1];
    act.status = statuses[Math.floor((Math.random() * (4 - 1) + 1)) - 1];
    act.assignmentType = assignmentTypes[(Math.floor(Math.random() * (3 - 1) + 1)) - 1];
    act.showExtra = false;

    if(act.status === 'Completed'){
      const start = new Date();
      const end = new Date('12/31/2021');
      act.dateCompleted = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }

    return act;

  }

  public generateLists(): void {
    const act1: Activity = new Activity();
    act1.title = 'French Fry and Dicing/Loading Checklist';
    act1.activityType = 'Checklist';
    act1.status = 'Started';
    act1.assignmentType = 'Required for Promotion';
    act1.showExtra = false;

    const act2: Activity = new Activity();
    act2.title = 'Key Practices | Fries';
    act2.activityType = 'Document-Based';
    act2.status = 'New';
    act2.assignmentType = 'Recommended';
    act2.showExtra = false;

    this.currentList.push(act1);
    this.currentList.push(act2);

    const act3: Activity = new Activity();
    act3.title = 'French Fries Manual';
    act3.activityType = 'Document-Based';
    act3.status = 'Completed';
    act3.dateCompleted = new Date('3/2/2021');
    act3.assignmentType = 'Recommended';
    act3.showExtra = false;

    const act4: Activity = new Activity();
    act4.title = 'Safety Bulletin | Emergency Procedures';
    act4.activityType = 'Elearning';
    act4.status = 'Completed';
    act4.dateCompleted = new Date('3/3/2021');
    act4.assignmentType = 'Required';
    act4.showExtra = false;

    this.completedList.push(act3);
    this.completedList.push(act4);
  }

}
