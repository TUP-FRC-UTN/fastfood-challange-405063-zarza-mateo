import { Component } from '@angular/core';
import { PedidosService } from '../services/pedidos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cocina',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cocina.component.html',
  styleUrl: './cocina.component.css',
})
export class CocinaComponent {
  constructor(public pedidos: PedidosService) {}

  Cocinar() {
    throw new Error('Method not implemented.');
  }
}
