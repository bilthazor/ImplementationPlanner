import { PlanService } from './plan.service';
import { FormsModule } from '@angular/forms';
import { PageHeaderModule } from './../../shared/modules/page-header/page-header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanComponent } from './plan.component';
import { PlanRoutingModule } from './plan-routing.module';
import { DataTableModule, DialogModule, ButtonModule, InputTextModule, DropdownModule, SpinnerModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    PlanRoutingModule,
    PageHeaderModule,
    DataTableModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    DropdownModule,
    SpinnerModule
  ],
  declarations: [PlanComponent],
  providers: [PlanService]
})
export class PlanModule { }
