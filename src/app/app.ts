import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Categories } from './components/categories/categories';
import { Carousel } from './components/carousel/carousel';
import { Main } from './components/main/main';
import { Footer } from './components/footer/footer';
import { A824 } from "./assignments/a8-24/a8-24";
import { HttpDemo1 } from "./components/http-demo1/http-demo1";
import { CommentList } from "./components/comment-list/comment-list";
import { Products } from "./components/products/products";
import { A825 } from "./assignments/a8-25/a8-25";
import {EmployeeCrud } from "./components/employee-crud/employee-crud";

@Component({
  selector: 'app-root',
  imports: [
    EmployeeCrud
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular1_july');
}
