import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent implements OnInit {

  public departments: string[] = JSON.parse(localStorage.getItem('Department')) || [];
  public department: string;

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  public addDepartment(): void {
    if (this.validateDepartment()) {
      this.departments.push(this.department);
      localStorage.setItem('Department', JSON.stringify(this.departments));
      this.department = '';
    }
  }

  private validateDepartment(): boolean {
    if (this.department) {//check if empty
      // check if duplicate
      if (this.departments.includes(this.department)) {
        this.notification("Duplicate name", "Choose a unique name");
        return false;
      }
      return true;
    }
    this.notification("Empty field", "Add the department name");
    return false;
  }

  private notification(message: string, resolution: string) {
    this._snackBar.open(message, resolution);
  }
}
