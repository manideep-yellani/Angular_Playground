import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  emp_api_url = 'http://localhost:3000/employees';


  constructor(private httpClient: HttpClient) {
  }
  getAllEmployees(): Observable<Employee[]> {
    // return this.httpClient.get<Employee[]>(this.emp_api_url); // service returns the response as it is
    return this.httpClient.get<Employee[]>(this.emp_api_url).pipe(
      map((response: Employee[]) => {
        return response.map((emp: Employee) => {
          return new Employee(emp.id, emp.firstName, emp.lastName, emp.sal, emp.gender);
        });
      })
    );

    // service gets normal objects as response from API, converts each response to employee class object and returns back to component
  }
  addEmployee(empToAdd: Object) {
    return this.httpClient.post(this.emp_api_url, empToAdd);
  }
  updateEmployee(empId: any, dataToUpdate: Object) {
    return this.httpClient.patch(`${this.emp_api_url}/${empId}`, dataToUpdate);
  }
  deleteEmployee(empId: any) {
    return this.httpClient.delete(`${this.emp_api_url}/${empId}`);
  }
}