import { FormsModule } from '@angular/forms';
import { EmployeeService } from './../../services/employee';
import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-crud',
  imports: [
    FormsModule
  ],
  templateUrl: './employee-crud.html',
  styleUrl: './employee-crud.css'
})
export class EmployeeCrud implements OnInit {
  employeeArr: any = [];

  newEmpToAdd: any = {
    "id": null,
    "firstName": "",
    "lastName": "",
    "email": "",
    "gender": "",
    "sal": null
  }

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit() {
    this.fetchEmployees();
  }
  fetchEmployees() {
    this.employeeService.getAllEmployees().subscribe((response: any) => {
      console.log(response)
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