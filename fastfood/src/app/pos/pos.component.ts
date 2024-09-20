import { Component } from '@angular/core';
import { PedidosService } from '../services/pedidos.service';
import { Pedido } from '../models/pedido';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-pos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pos.component.html',
  styleUrl: './pos.component.css',
})
export class PosComponent {
  constructor(private pedidos: PedidosService) {}
  
  Confirmar(form : NgForm) {
    this.pedidos.obtenerPedido(form.value);
    form.reset();
  }
}
