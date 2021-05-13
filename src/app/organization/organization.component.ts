import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent implements OnInit {

  public departments = JSON.parse(localStorage.getItem('Department')) || [];
  public department: string;

  constructor() { }

  ngOnInit(): void {
  }

  public addDepartment(): void {
    if (this.department) {
      this.departments.push(this.department);
      localStorage.setItem('Department', JSON.stringify(this.departments));
      this.department = '';
    }
  }
}
