import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../../models/employee';

@Injectable({
  providedIn: 'root'
})
export class Crud {

  data:Employee[]=[]
  // isLoading:boolean=false
  
  myUrl: string =""; // Add actual URL

  constructor(private http: HttpClient) {}
  
  
  getData() {
    // this.isLoading=true
    return this.http.get<Employee[]>(this.myUrl)
  }
  
  createData(data: any) {
    return this.http.post(this.myUrl, data);
  }
  
  updateData(id: string, data: any) {
    return this.http.put(`${this.myUrl}/${id}`, data);
  }
  
deleteUser(id: string) {
  return this.http.delete(`${this.myUrl}/${id}`);
}
}