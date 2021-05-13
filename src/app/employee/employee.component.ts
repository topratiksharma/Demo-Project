import { Component, OnInit } from '@angular/core';
import { Department } from '../organization/organization.models';
import { Employee, EmployeeType } from './employee.models';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  public departments: Department[] = JSON.parse(localStorage.getItem('Department')) || [];
  public displayedColumns = ["name", "type", "department", "reportingManager"];
  public employee: Employee = { name: '', type: '', department: '', reportingManager: '' };
  public employees = JSON.parse(localStorage.getItem('Employees')) || [];
  public isManagerPresentForCurrentDepartment: boolean = true;
  public managers = [];

  constructor() { }

  ngOnInit(): void {
    this.managers = this.employees.filter(emp => emp.type === EmployeeType.Manager);
  }

  public SaveEmployeeInfotmation(): void {
    if (this.validateEmployeeInformation()) {
      this.employees.push(this.employee);
      localStorage.setItem('Employees', JSON.stringify(this.employees));

      if (!this.isManagerPresentForCurrentDepartment) {
        const currentDepartment = this.departments.filter(x => x.name === this.employee.department)[0];
        currentDepartment.manager = this.employee.name;
        localStorage.setItem('Department', JSON.stringify(this.departments));
      }
      this.refreshList();
    }
    this.clearForm();
  }

  private validateEmployeeInformation(): boolean {
    //validate if all info is correct
    if (this.employee.department && this.employee.name && this.employee.type) {
      if (this.employees.length === 0) {
        // this should be manager or reject it.
        return this.employee.type === EmployeeType.Manager;
      }
    }
    return false;
  }

  private refreshList() {
    this.employees = JSON.parse(localStorage.getItem('Employees'));
    this.managers = this.employees.filter(emp => emp.type === EmployeeType.Manager);
  }

  private clearForm() {
    this.employee = { name: '', type: '', department: '', reportingManager: '' };
  }

  public isDepartmentManagerPresent(department): void {
    const currentDepartment = this.departments.filter(x => x.name === department)[0];

    if (currentDepartment && currentDepartment.manager) {
      this.isManagerPresentForCurrentDepartment = true;
    }
    else {
      this.employee.type = EmployeeType.Manager;
      this.isManagerPresentForCurrentDepartment = false;
    }
  }
}