import { Injectable } from '@angular/core';
import { Pedido } from '../models/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  constructor() { }

public pedidosIngresados : Pedido[] = []

  obtenerPedido(p:Pedido){
    p.numero = this.pedidosIngresados.length+1;
    this.pedidosIngresados.push(p);
    console.log('funciona por que soy una locura')
    console.log(this.pedidosIngresados)
  }


}
