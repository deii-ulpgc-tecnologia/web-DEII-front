import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { Documento } from '../../core/models/documento';

@Component({
  selector: 'app-documentos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './documentos.html',
  styleUrl: './documentos.css'
})
export class DocumentosComponent {

  documentos: Documento[] = [
    {
      id: 1,
      nombre: 'Apuntes Tema 1',
      asignatura: 'Algoritmo y Programación',
      carrera: 'Ingeniería Informática',
      curso: '2º',
      tipo: 'Teoría',
      pdfUrl: 'assets/docs/tema1.pdf'
    },
    {
      id: 2,
      nombre: 'Práctica 2',
      asignatura: 'ASR',
      carrera: 'Ingeniería Informática',
      curso: '3º',
      tipo: 'Prácticas',
      pdfUrl: 'assets/docs/practica2.pdf'
    }
  ];

}