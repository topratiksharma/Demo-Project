import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentRoutingModule } from './department-route.module';
import { DepartmentComponent } from './department.component';



@NgModule({
  declarations: [DepartmentComponent],
  imports: [
    CommonModule,
    DepartmentRoutingModule
  ],
  exports: [DepartmentComponent]
})
export class DepartmentModule { }
