import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Documento } from '../../core/models/documento';

@Component({
  selector: 'app-documentos',
  imports: [RouterLink],
  templateUrl: './documentos.html',
  styleUrl: './documentos.css'
})
export class Documentos {
  documentos = signal<Documento[]>([
    {
      id: 1,
      nombre: 'Apuntes Tema 1',
      asignatura: 'Algoritmos y Estructuras de Datos',
      carrera: 'Ingeniería Informática',
      curso: '2º',
      tipo: 'Teoría',
      pdfUrl: 'assets/docs/tema1.pdf'
    }
  ]);
}