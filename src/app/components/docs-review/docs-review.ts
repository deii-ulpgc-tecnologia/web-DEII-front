import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Solitude } from '../../core/services/solitude';

@Component({
  selector: 'app-docs-review',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './docs-review.html',
  styleUrls: ['./docs-review.css']
})
export class DocsReviewComponent {
  solicitudesService = inject(Solitude);

  // Filtros reactivos
  filtroTexto = signal('');
  filtroGrado = signal('');
  filtroAsignatura = signal('');
  filtroEstado = signal('');

  // Listas para los selects
  grados = ['GII', 'GCID', 'GFM'];
  asignaturas = ['AyG', 'BD1', 'FFI'];
  estado = ['Pendiente', 'Aprobado', 'Rechazado'];

  // --- VARIABLES PARA EL MODAL DE CONFIRMACIÓN ---
  mostrarModal = signal(false);
  solicitudSeleccionada = signal('');
  accionSeleccionada = signal<'Aprobado' | 'Rechazado'>('Aprobado');

  // Lista filtrada computada
  solicitudesMostradas = computed(() => {
    const texto = this.filtroTexto().toLowerCase();
    const grado = this.filtroGrado();
    const asig = this.filtroAsignatura();
    const est = this.filtroEstado();

    return this.solicitudesService.solicitudes().filter(s => {
      const coincideTexto = s.correo.toLowerCase().includes(texto) || s.id.includes(texto);
      const coincideGrado = grado ? s.grado === grado : true;
      const coincideAsig = asig ? s.asignatura === asig : true;
      const coincideEstado = est ? s.estado === est : true;
      return coincideTexto && coincideGrado && coincideAsig && coincideEstado && s.estado === 'Pendiente';
    });
  });

  gestionarSolicitud(id: string, accion: 'Aprobado' | 'Rechazado') {
    this.solicitudSeleccionada.set(id);
    this.accionSeleccionada.set(accion);
    this.mostrarModal.set(true);
  }

  confirmarAccion() {
    this.solicitudesService.actualizarEstado(this.solicitudSeleccionada(), this.accionSeleccionada());
    this.cerrarModal();
  }

  cerrarModal() {
    this.mostrarModal.set(false);
  }

  verDetalles(id: string) {
    console.log('Abriendo modal/vista de detalles para:', id);
  }
}