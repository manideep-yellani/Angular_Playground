import { Component, signal } from '@angular/core';
import { EmployeeCrud } from "./components/employee-crud/employee-crud";
import { ObservableDemo1 } from "./components/observable-demo1/observable-demo1";
import { ObservableDemo2 } from "./components/observable-demo2/observable-demo2";
import { ProductList } from './components/product-list/product-list';
import { Cart } from "./components/cart/cart";

@Component({
  selector: 'app-root',
  imports: [EmployeeCrud, ObservableDemo1, ObservableDemo2, ProductList, Cart],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular1_july');
}
