import { Component } from '@angular/core';
import {LoginclientFormComponent } from './loginclient-form/loginclient-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string;
  mostrarDatos: Boolean;

  constructor() {
    this.title = 'Sistema de ofertas Bienes y servicios';

  }

  activarboton(): void {
    this.mostrarDatos = true;
  }

}
