import { Component, OnInit } from '@angular/core';
import { FlowbiteService } from '../services/flowbite.service';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-algun-componente',
  standalone: true,
  imports: [],
  templateUrl: './componente.html', // O la ruta exacta de tu archivo HTML
  styleUrls: []
})
export class AlgunComponenteComponent implements OnInit {
  constructor(private flowbiteService: FlowbiteService) {}

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite((flowbite) => {
      initFlowbite();
    });
  }
}