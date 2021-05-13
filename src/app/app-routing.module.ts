import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'organization', pathMatch: 'full' },
  { path: 'organization', loadChildren: () => import('../app/organization/organization.module').then(m => m.OrganizationModule) },
  { path: 'employee', loadChildren: () => import('../app/employee/employee.module').then(m => m.EmployeeModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
