import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  
  public departments = JSON.parse(localStorage.getItem('Department')) || [];
  public displayedColumns = ["name", "type", "department", "reportingManager"];
  public employee: Employee = { name: '', type: '', department: '', reportingManager: '' };
  public employees = JSON.parse(localStorage.getItem('Employees')) || [];
  public managers = [];

  constructor() { }

  ngOnInit(): void {
    this.managers = this.employees.filter(emp => emp.type === 'manager');
  }

  public SaveEmployeeInfotmation(): void {
    if (this.validateEmployeeInformation()) {
      this.employees.push(this.employee);
      localStorage.setItem('Employees', JSON.stringify(this.employees));
      this.refreshList();      
    }
    this.clearForm();
  }

  private validateEmployeeInformation(): boolean {
    // check if department has any other manager
    if (this.employees.length === 0) {
      // this should be manager or reject it.
      return this.employee.type === 'manager';
    }
    else {
      if (this.employee.department && this.employee.name && this.employee.reportingManager && this.employee.type) {
        return true;
      }
      // check if all fiels are selected else reject it
    }
    return false;
  }

  private refreshList() {
    this.employees = JSON.parse(localStorage.getItem('Employees'));
    this.managers = this.employees.filter(emp => emp.type === 'manager');
  }

  private clearForm() {
    this.employee = { name: '', type: '', department: '', reportingManager: '' };
  }
}

export interface Employee {
  name: string;
  type: string;
  department: string;
  reportingManager: string;
}