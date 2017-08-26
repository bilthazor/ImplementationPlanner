import { PageHeaderModule } from './../../shared/modules/page-header/page-header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanComponent } from './plan.component';
import { PlanRoutingModule } from './plan-routing.module';
import { DataTableModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    PlanRoutingModule,
    PageHeaderModule,
    DataTableModule
  ],
  declarations: [PlanComponent]
})
export class PlanModule { }
