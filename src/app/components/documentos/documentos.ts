import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Documento } from '../../models/documento';

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
      asignatura: 'Algoritmia',
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
  ]);

}