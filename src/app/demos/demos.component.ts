import { Component, OnInit } from '@angular/core';

export class Project {
  public title: string = '';
  public desc: string = '';
  public tech: Tech[] = [];
  public routePath: string = '';
  public githubLink: string = '';
  public previewImgName: string = '';
}

enum Tech {
  Typescript = 'Typescript',
  CSS3 = 'CSS3',
  HTML5 = 'HTML5',
  Angular = 'Angular',
  Material = 'Material',
  Bootstrap = 'Bootstrap'
}

@Component({
  templateUrl: './demos.component.html',
  styleUrls: ['./demos.component.scss']
})
export class DemosComponent implements OnInit {
  
  public projects: Project[] = [];

  constructor() { }

  public ngOnInit(): void {
    this.buildProjectList();
  }

  private buildProjectList(): void {
    // Task List Tracker
    const taskListTrackerProject: Project = new Project();
    taskListTrackerProject.title = 'Task List Tracker';
    taskListTrackerProject.desc = `A simple application that allows a 
                                  user create tasks inside of lists and
                                   check them off.`;
    taskListTrackerProject.tech = [Tech.CSS3, Tech.HTML5, Tech.Angular, Tech.Typescript, Tech.Material];
    taskListTrackerProject.routePath = 'task-list-tracker';
    taskListTrackerProject.previewImgName = 'task-list-tracker-preview.png';

    this.projects.push(taskListTrackerProject);
    // -----------------

    // Nested Table Accordion
    const nestedTableAccordionProject: Project = new Project();
    nestedTableAccordionProject.title = 'Nested Table Accordion';
    nestedTableAccordionProject.desc = `A proof of concept built for a project
                                  that used a third party library to generate
                                  tables with an accordion feature. The third party library
                                  created dozens of components for each row of data which
                                  caused severe UI performance issues. Note: This code ended up
                                  being the basis of what was used to replace it.`;
                                  nestedTableAccordionProject.tech = [Tech.CSS3, Tech.HTML5, Tech.Angular, Tech.Typescript, Tech.Bootstrap];
    nestedTableAccordionProject.routePath = 'nested-table-accordion';
    nestedTableAccordionProject.previewImgName = 'nested-table-accordion-preview.png';
    this.projects.push(nestedTableAccordionProject);
    // -----------------

  }

}
