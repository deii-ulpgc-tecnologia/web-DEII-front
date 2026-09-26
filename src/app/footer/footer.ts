import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // Añade esta importación

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {}