import { Component, inject } from '@angular/core';
import { Solitude } from '../core/services/solitude';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  solicitudesPendientes = inject(Solitude);
  pendientes = this.solicitudesPendientes.numeroPendientes;
}