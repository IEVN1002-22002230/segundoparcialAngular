import { Component, OnInit } from '@angular/core';
import { ICinepol } from '../cinepol';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms'

@Component({
  imports: [FormsModule,ReactiveFormsModule],
  selector: 'app-cinepolis',
  styleUrl: './cinepolis.css',
  templateUrl: './cinepolis.html',
})

export class Cinepolis implements OnInit {

  cinepolisForm!: FormGroup; 

  compraActual: ICinepol = {
    nombre: '',
    compradores: 0, 
    tarjeta: '',
    boletos: 0,
    pagar: 0
  };

  mensajeError: string = '';

  ngOnInit(): void {
    this.cinepolisForm = new FormGroup({
      nombre: new FormControl(''),
      cantidad_compradores: new FormControl(''),
      tarjeta_cineco: new FormControl(''),
      cantidad_boletas: new FormControl(''),
      valor_pagar: new FormControl('') 
    });
  }

  procesar(): void {
    
    this.mensajeError = ''; 

    this.compraActual.nombre = this.cinepolisForm.value.nombre;
  

    //No pueden comprar más de 7 boletas por persona
    const boletasMaximas = parseInt(this.cinepolisForm.value.cantidad_compradores) * 7;


    if (parseInt(this.cinepolisForm.value.cantidad_boletas) > boletasMaximas) {
      this.mensajeError = `Error: Máximo permitido 7 boletos por persona`;
      this.compraActual.pagar = 0;
      return; 
    }

  
    
    let total = parseInt(this.cinepolisForm.value.cantidad_boletas) * 12;

    // Descuentos por cantidad
    let descuentoCantidad = 0;
    if (parseInt(this.cinepolisForm.value.cantidad_boletas) > 5) {
      descuentoCantidad = 0.15; 
    } else if (parseInt(this.cinepolisForm.value.cantidad_boletas) >= 3 && parseInt(this.cinepolisForm.value.cantidad_boletas) <= 5) {
      descuentoCantidad = 0.10; 
    }

    total = total - (total * descuentoCantidad);

    // Descuento extra CINECO
    if (this.cinepolisForm.value.tarjeta_cineco === 'si') {
      total = total - (total * 0.10); 
    }

    this.compraActual.pagar = total;

  }


}