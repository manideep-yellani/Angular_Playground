import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeCrud } from "./components/employee-crud/employee-crud";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EmployeeCrud],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular1_july');
}
