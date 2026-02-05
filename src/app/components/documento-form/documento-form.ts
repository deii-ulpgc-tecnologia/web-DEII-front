import { Component, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Documento } from '../../core/models/documento';

@Component({
  selector: 'app-documento-form',
  imports: [FormsModule],
  templateUrl: './documento-form.html',
  styleUrl: './documento-form.css'
})
export class DocumentoForm {
  documento = signal<Documento>({
    id: 1,
    nombre: 'Apuntes Tema 1',
    asignatura: 'Algoritmia',
    carrera: 'Ingeniería Informática',
    curso: '2º',
    tipo: 'Teoría',
    pdfUrl: 'assets/docs/tema1.pdf'
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    const documentosMock: Documento[] = [
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
    ];

    const encontrado = documentosMock.find(d => d.id === id);

    if (encontrado) {
      this.documento.set(encontrado);
    }
  }

  actualizarCampo<K extends keyof Documento>(campo: K, valor: Documento[K]) {
    this.documento.update(documento => ({
      ...documento,
      [campo]: valor
    }));
  }

  guardarCambios() {
    console.log('Documento actualizado:', this.documento());
    this.router.navigate(['/documentos']);
  }
}