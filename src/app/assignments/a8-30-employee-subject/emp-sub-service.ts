import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpSubService {


  constructor(private http: HttpClient) {
  this.loadInitialEmployees();
}

private loadInitialEmployees() {
  this.http.get<any[]>('http://localhost:3000/employees').subscribe(data => {
   
    // let a=this.empBehaviourSub.value
    // a.push(data)
    // this.empBehaviourSub.next(data);
    console.log(data,"hii");
     this.empBehaviourSub.next(data);

  });
}


  private empBehaviourSub= new BehaviorSubject<any>([]);
  empObservable=this.empBehaviourSub.asObservable()


  add(emp :any){
    let a=this.empBehaviourSub.value
    a.push(emp);
    this.empBehaviourSub.next(a);
  }

  remove(id:number){
    let a=this.empBehaviourSub.value
    a=a.filter((emp:any)=>emp.id!==id)
    this.empBehaviourSub.next(a);
  }
}
