import { Component, signal } from '@angular/core';
import { EmployeeCrud } from "./components/employee-crud/employee-crud";
import { ObservableDemo1 } from "./components/observable-demo1/observable-demo1";
import { ObservableDemo2 } from "./components/observable-demo2/observable-demo2";
import { ProductList } from './components/product-list/product-list';
import { Cart } from "./components/cart/cart";
import { A830EmployeeSubject } from "./assignments/a8-30-employee-subject/a8-30-employee-subject";
import { A831TodoSignal } from "./assignments/a8-31-todo-signal/a8-31-todo-signal";
import { A91FolderStructure } from "./assignments/a9-1-folder-structure/a9-1-folder-structure";

@Component({
  selector: 'app-root',
  imports: [EmployeeCrud, ObservableDemo1, ObservableDemo2, ProductList, Cart, A830EmployeeSubject, A831TodoSignal, A91FolderStructure],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular1_july');
}
