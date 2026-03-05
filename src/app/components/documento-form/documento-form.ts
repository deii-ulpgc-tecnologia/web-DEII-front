import { Component, signal, computed, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { Documento } from '../../core/models/documento';
import { Asignatura } from '../../core/models/asignatura';
import { DocumentosService } from '../../core/services/documentos';

@Component({
  selector: 'app-documento-form',
  imports: [FormsModule],
  templateUrl: './documento-form.html',
  styleUrl: './documento-form.css'
})
export class DocumentoForm {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private documentosService = inject(DocumentosService);

  documento = signal<Documento>({
    id: 0,
    nombre: '',
    asignatura: '',
    carrera: 'Ingeniería Informática',
    curso: '1º',
    tipo: 'Teoría',
    pdfUrl: ''
  });

  grados = signal([
    'Ingeniería Informática',
    'Ciencia e Ingeniería de Datos',
    'Ingeniería Física y Matemática'
  ]);

  cursos = signal(['1º', '2º', '3º', '4º']);

  gradoSeleccionado = signal('Ingeniería Informática');
  cursoSeleccionado = signal('1º');
  busquedaAsignatura = signal('');

  asignaturas = signal<Asignatura[]>([
    {
      id: 1,
      nombre: 'Fundamentos de Computadores',
      acronimo: 'FC',
      grado: 'Ingeniería Informática',
      curso: '1º',
      semestre: 'Primer semestre',
      alias: []
    },
    {
      id: 2,
      nombre: 'Fundamentos de Programación I',
      acronimo: 'FP1',
      grado: 'Ingeniería Informática',
      curso: '1º',
      semestre: 'Primer semestre',
      alias: []
    },
    {
      id: 3,
      nombre: 'Matemáticas para la Computación',
      acronimo: 'MC',
      grado: 'Ingeniería Informática',
      curso: '1º',
      semestre: 'Segundo semestre',
      alias: ['Cálculo', 'Calculo']
    },
    {
      id: 4,
      nombre: 'Fundamentos físicos de la Informática',
      acronimo: 'FFI',
      grado: 'Ingeniería Informática',
      curso: '1º',
      semestre: 'Segundo semestre',
      alias: ['Física', 'Fisica']
    },
    {
      id: 5,
      nombre: 'Administración de Servicios en Red',
      acronimo: 'ASR',
      grado: 'Ingeniería Informática',
      curso: '3º',
      semestre: 'Segundo semestre',
      alias: ['Administración de Sistemas en Red']
    },
    {
      id: 6,
      nombre: 'Virtualización de Procesos Distribuidos',
      acronimo: 'VPD',
      grado: 'Ingeniería Informática',
      curso: '3º',
      semestre: 'Segundo semestre',
      alias: []
    },
    {
      id: 7,
      nombre: 'Seguridad de la información',
      acronimo: 'SI',
      grado: 'Ingeniería Informática',
      curso: '4º',
      semestre: 'Segundo semestre',
      alias: []
    }
  ]);

  asignaturasFiltradas = computed(() => {
    const texto = this.normalizar(this.busquedaAsignatura());
    const grado = this.gradoSeleccionado();
    const curso = this.cursoSeleccionado();

    return this.asignaturas().filter(asignatura => {
      const perteneceAlGrado = asignatura.grado === grado;
      const perteneceAlCurso = asignatura.curso === curso;

      const campos = [
        asignatura.nombre,
        asignatura.acronimo,
        asignatura.semestre,
        ...asignatura.alias
      ].map(valor => this.normalizar(valor));

      const coincideBusqueda =
        texto === '' || campos.some(valor => valor.includes(texto));

      return perteneceAlGrado && perteneceAlCurso && coincideBusqueda;
    });
  });

  constructor() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const encontrado = this.documentosService.obtenerPorId(id);

    if (encontrado) {
      this.documento.set({ ...encontrado });
      this.gradoSeleccionado.set(encontrado.carrera);
      this.cursoSeleccionado.set(encontrado.curso);
      this.busquedaAsignatura.set(encontrado.asignatura);
    }
  }

  cambiarGrado(grado: string) {
    this.gradoSeleccionado.set(grado);
    this.busquedaAsignatura.set('');

    this.actualizarCampo('carrera', grado);
    this.actualizarCampo('asignatura', '');
  }

  cambiarCurso(curso: string) {
    this.cursoSeleccionado.set(curso);
    this.busquedaAsignatura.set('');

    this.actualizarCampo('curso', curso);
    this.actualizarCampo('asignatura', '');
  }

  seleccionarAsignatura(asignatura: Asignatura) {
    this.actualizarCampo('asignatura', asignatura.nombre);
    this.actualizarCampo('carrera', asignatura.grado);
    this.actualizarCampo('curso', asignatura.curso);

    this.gradoSeleccionado.set(asignatura.grado);
    this.cursoSeleccionado.set(asignatura.curso);
    this.busquedaAsignatura.set(`${asignatura.acronimo} - ${asignatura.nombre}`);
  }

  actualizarCampo<K extends keyof Documento>(campo: K, valor: Documento[K]) {
    this.documento.update(documento => ({
      ...documento,
      [campo]: valor
    }));
  }

  guardarCambios() {
    this.documentosService.actualizarDocumento(this.documento());
    this.router.navigate(['/documentos']);
  }

  normalizar(texto: string): string {
    return texto
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }
}