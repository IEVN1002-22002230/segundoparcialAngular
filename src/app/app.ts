import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Zodiaco } from './formularios/zodiaco/zodiaco';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { AlgunComponenteComponent } from './componente/algun-componente.componente';
import { Navbar } from './navbar/navbar';
import { Usuarios } from './formularios/usuarios/usuarios';

@Component({
  imports: [RouterOutlet,Navbar,Usuarios],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('segundoparcialAngular');


  ngOnInit(): void {
    initFlowbite();
  }
}


