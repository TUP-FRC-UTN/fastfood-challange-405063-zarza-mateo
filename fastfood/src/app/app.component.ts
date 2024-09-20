import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PosComponent } from './pos/pos.component';
import { CocinaComponent } from './cocina/cocina.component';
import { PedidosService } from './services/pedidos.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PosComponent, CocinaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(public pedidos: PedidosService) {}

  title = 'fastfood';

  Entregar(i : number) {
    this.pedidos.pedidosTerminados.splice(i, 1);  }
}
