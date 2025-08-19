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
    TableCard
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular1_july');
}
