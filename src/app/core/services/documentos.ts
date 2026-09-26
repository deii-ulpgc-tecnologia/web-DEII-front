import { Injectable, signal } from '@angular/core';
import { Documento } from '../models/documento';

@Injectable({
  providedIn: 'root'
})
export class DocumentosService {

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

  obtenerPorId(id: number): Documento | undefined {
    return this.documentos().find(documento => documento.id === id);
  }

  actualizarDocumento(documentoActualizado: Documento) {
    this.documentos.update(documentos =>
      documentos.map(documento =>
        documento.id === documentoActualizado.id
          ? documentoActualizado
          : documento
      )
    );
  }
eliminarDocumento(id: number) {
  this.documentos.update(documentos =>
    documentos.filter(documento => documento.id !== id)
  );
}
}