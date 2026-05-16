import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { Solitude } from '../../core/services/solitude';
import { DocumentosService } from '../../core/services/documentos';

@Component({
  selector: 'app-docs-review',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './docs-review.html',
  styleUrls: ['./docs-review.css']
})
export class DocsReviewComponent {
  solicitudesService = inject(Solitude);
  documentosService = inject(DocumentosService);

  filtroTexto = signal('');
  filtroGrado = signal('');
  filtroAsignatura = signal('');
  filtroEstado = signal('');

  grados = ['GII', 'GCID', 'GFM'];
  asignaturas = ['AyG', 'BD1', 'FFI'];
  estado = ['Pendiente', 'Aprobado', 'Rechazado'];

  mostrarModal = signal(false);
  solicitudSeleccionada = signal('');
  accionSeleccionada = signal<'Aprobado' | 'Rechazado'>('Aprobado');

  solicitudesMostradas = computed(() => {
    const texto = this.filtroTexto().toLowerCase().trim();
    const grado = this.filtroGrado();
    const asig = this.filtroAsignatura();
    const est = this.filtroEstado();

    return this.solicitudesService.solicitudes().filter(s => {
      const coincideTexto =
        s.correo.toLowerCase().includes(texto) ||
        s.id.toLowerCase().includes(texto);

      const coincideGrado = grado ? s.grado === grado : true;
      const coincideAsig = asig ? s.asignatura === asig : true;
      const coincideEstado = est ? s.estado === est : true;

      return coincideTexto && coincideGrado && coincideAsig && coincideEstado;
    });
  });

  gestionarSolicitud(id: string, accion: 'Aprobado' | 'Rechazado') {
    this.solicitudSeleccionada.set(id);
    this.accionSeleccionada.set(accion);
    this.mostrarModal.set(true);
  }

  confirmarAccion() {
    this.solicitudesService.actualizarEstado(
      this.solicitudSeleccionada(),
      this.accionSeleccionada()
    );

    this.cerrarModal();
  }

  cerrarModal() {
    this.mostrarModal.set(false);
  }

  verDetalles(id: string) {
    console.log('Abriendo detalles para:', id);
  }

eliminarDocumento(documentoId: number) {
  const confirmado = confirm('¿Seguro que quieres eliminar este documento?');

  if (!confirmado) return;

  this.documentosService.eliminarDocumento(documentoId);
  this.solicitudesService.eliminarSolicitudPorDocumentoId(documentoId);
}
}