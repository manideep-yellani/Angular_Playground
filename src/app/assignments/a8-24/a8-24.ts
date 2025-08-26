import { Component,OnInit } from '@angular/core';
import { inject } from '@angular/core';
import { EmployeeService } from './employee-service';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-a8-24',
  imports: [FormsModule],
  templateUrl: './a8-24.html',
  styleUrl: './a8-24.css',
})
export class A824 {
  data: any;
  info: string = 'All';
  ngOnInit() {
    this.getData(this.info); 
  }
  EmployeeServiceObj = inject(EmployeeService);
  employees = this.EmployeeServiceObj.employees;
  getData(type: string) {
    if (type === 'All') {
      this.data = this.EmployeeServiceObj.getAllEmployees();
      console.log(this.data);
    }
    if (type === 'male') this.data = this.EmployeeServiceObj.getMaleEmployees();
    if (type === 'female') this.data = this.EmployeeServiceObj.getFemaleEmployees();
  }
}
