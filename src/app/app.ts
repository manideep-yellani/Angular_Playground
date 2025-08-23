import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Categories } from './components/categories/categories';
import { Carousel } from './components/carousel/carousel';
import { Main } from './components/main/main';
import { Footer } from './components/footer/footer';
import { Databinding } from "./components/databinding/databinding";
import { FormsModule } from '@angular/forms';
import { Directives } from "./components/directives/directives";
import { TableCard } from "./components/table-card/table-card";
import { A819 } from "./assignments/a8-19/a8-19";
import { Demo1 } from "./components/demo1/demo1";
import { A820EmployeeCrud } from "./assignments/a8-20-employee-crud/a8-20-employee-crud";
import { MyModal } from "./components/my-modal/my-modal";
import { ProductList } from "./components/product-list/product-list";
import { A821 } from "./assignments/a8-21/a8-21";
import { ParentDemo } from "./components/parent-demo/parent-demo";
import { EmployeeCrud } from "./assignments/a8-22/employee-crud/employee-crud";

@Component({
  selector: 'app-root',
  imports: [
    Navbar,
    FormsModule,
    Categories,
    Carousel,
    Main,
    Footer,
    Databinding,
    Directives,
    TableCard,
    A819,
    Demo1,
    A820EmployeeCrud,
    MyModal,
    ProductList,
    A821,
    ParentDemo,
    EmployeeCrud
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular1_july');
}
