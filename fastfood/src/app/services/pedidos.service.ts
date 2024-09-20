import { Injectable } from '@angular/core';
import { Pedido } from '../models/pedido';

@Injectable({
  providedIn: 'root',
})
export class PedidosService {
  constructor() {}

  pedidosIngresados: Pedido[] = [];
  pedidosCocinando: Pedido[] = [];
  pedidosTerminados: Pedido[] = [];

  obtenerPedido(p: Pedido) {
    p.numero = Math.floor(Math.random() * 1000) + 1;

    this.pedidosIngresados.push(p);
    console.log('funciona por que soy una locura');
    console.log(this.pedidosIngresados);
  }
}
