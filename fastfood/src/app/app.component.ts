import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PosComponent } from "./pos/pos.component";
import { CocinaComponent } from "./cocina/cocina.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PosComponent, CocinaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fastfood';
}
