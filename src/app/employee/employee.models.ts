
export interface Employee {
    name: string;
    type: string;
    department: string;
    reportingManager: string;
}

export enum EmployeeType {
    Employee = "employee",
    Manager = "manager"
}