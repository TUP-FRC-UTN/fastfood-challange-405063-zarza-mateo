import { Component } from '@angular/core';
import { PedidosService } from '../services/pedidos.service';
import { CommonModule } from '@angular/common';
import { Pedido } from '../models/pedido';

@Component({
  selector: 'app-cocina',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cocina.component.html',
  styleUrl: './cocina.component.css',
})
export class CocinaComponent {
  constructor(public pedidos: PedidosService) {}

  Cocinar(p: Pedido, i: number) {
    this.pedidos.pedidosCocinando.push(p);
    console.log(p);
    this.pedidos.pedidosIngresados.splice(i, 1);
  }

  Enviar() {
    this.pedidos.pedidosTerminados.push(this.pedidos.pedidosCocinando[0]);
    this.pedidos.pedidosCocinando.splice(0, 1);
  }
}
