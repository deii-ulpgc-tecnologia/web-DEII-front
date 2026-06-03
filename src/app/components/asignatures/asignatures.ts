import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-asignatures',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './asignatures.html',
  styleUrl: './asignatures.css',
})
export class Asignatures {
  teoria = [
    { nombre: 'Teoria1', url: '#' },
    { nombre: 'Teoria2', url: '#' },
    { nombre: 'Teoria3', url: '#' }
  ];

  practicas = [
    { nombre: 'Ejercicios1', url: '#' },
    { nombre: 'Ejercicios2', url: '#' }
  ];

  bibliografia = [
    { nombre: 'Libro1', url: '#' },
    { nombre: 'Libro2', url: '#' }
  ];

  apuntes = [
    {nombre: 'Apuntes1', url: '#' },
    {nombre: 'Apuntes2', url: '#' }
  ];

}
