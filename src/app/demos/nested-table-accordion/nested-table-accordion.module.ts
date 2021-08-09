import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlatButtonModule } from 'jsj-components';

import { NestedTableAccordionComponent } from './nested-table-accordion.component';

@NgModule({
  declarations: [
    NestedTableAccordionComponent,
  ],
  imports: [
    CommonModule,
    FlatButtonModule
  ]
})
export class NestedTableAccordionModule { }
