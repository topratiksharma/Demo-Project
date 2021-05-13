import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  public employee: Employee = {
    name: '',
    type: '',
    department: '',
    reportingManager: ''
  };

  public managers = [];
  public employees = JSON.parse(localStorage.getItem('Employees')) || [];
  public departments = JSON.parse(localStorage.getItem('Department')) || [];
  constructor() { }

  ngOnInit(): void {
    this.managers = this.employees.filter(emp => emp.type === 'manager');
  }

  public SaveEmployeeInfotmation(): void {
    if (this.validateEmployeeInformation()) {
      this.employees.push(this.employee);
      localStorage.setItem('Employees', JSON.stringify(this.employees));
    }

    console.log('Saved Infomation', this.employee);
    
    this.employee = {
      name: '',
      type: '',
      department: '',
      reportingManager: ''
    }
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
}

export interface Employee {
  name: string;
  type: string;
  department: string;
  reportingManager: string;
}