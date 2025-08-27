import { FormsModule } from '@angular/forms';
import { Employee } from './../../services/employee';
import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-crud',
  imports: [
    FormsModule
  ],
  templateUrl: './employee-crud.html',
  styleUrl: './employee-crud.css'
})
export class EmployeeCrud {
  employeeArr: any = [];

  newEmpToAdd: any = {
    "id": null,
    "firstName": "",
    "lastName": "",
    "email": "",
    "gender": "",
    "sal": null
  }

  constructor(private employeeService: Employee) {
  }

  ngOnInit() {
    this.fetchEmployees();
  }
  fetchEmployees() {
    this.employeeService.getAllEmployees().subscribe((response: any) => {
      this.employeeArr = response;
    })
  }
  deleteEmp(id: any) {
    this.employeeService.deleteEmployee(id).subscribe((response: any) => {
      // alert('emp deleted succesfully!!!');
      this.fetchEmployees();
    })
  }
  addEmp() {
    this.employeeService.addEmployee(this.newEmpToAdd).subscribe((response: any) => {
      // alert('emp deleted succesfully!!!');
      this.fetchEmployees();
    })
  }
}