import { Component } from '@angular/core';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-employee-table',
  imports: [FontAwesomeModule],
  templateUrl: './employee-table.html',
  styleUrl: './employee-table.css',
  inputs:['employees','deleteFn']
})
export class EmployeeTable {
employees:any
deleteFn:any
trashCon= faTrash
}
