import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationComponent } from './organization.component';
import { OrganizationRoutingModule } from './organization-route.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    OrganizationComponent
  ],
  imports: [
    CommonModule,
    OrganizationRoutingModule,
    FormsModule
  ]
})
export class OrganizationModule { }
