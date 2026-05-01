import { Injectable, signal, computed } from '@angular/core';
import type { Solitude as SolitudeModel } from '../models/solitude';

@Injectable({
  providedIn: 'root'
})
export class Solitude {
  // Estado inicial simulado basado en tu mockup
  private solicitudesSignal = signal<SolitudeModel[]>([
    { id: '001', grado: 'GII', asignatura: 'AyG', correo: 'a.estudiante1@deii.ulpgc.es', descripcion: 'Apuntes de Álgebra...', tipoArchivo: 'pdf', estado: 'Pendiente' },
    { id: '002', grado: 'GCID', asignatura: 'BD1', correo: 'j.garcia2@deii.ulpgc.es', descripcion: 'Resumen de Bases de Datos...', tipoArchivo: 'doc', estado: 'Pendiente' },
    { id: '003', grado: 'GFM', asignatura: 'FFI', correo: 'r.lozano3@deii.ulpgc.es', descripcion: 'Esquema de Electromagnetismo...', tipoArchivo: 'pdf', estado: 'Pendiente' }
  ]);

  // Exponemos la lista como de solo lectura
  public solicitudes = this.solicitudesSignal.asReadonly();

  // Signal computado: Se actualiza solo cada vez que cambia el número de pendientes. ¡Ideal para el Header!
  public numeroPendientes = computed(() => 
    this.solicitudesSignal().filter(s => s.estado === 'Pendiente').length
  );

  actualizarEstado(id: string, nuevoEstado: 'Aprobado' | 'Rechazado') {
    this.solicitudesSignal.update(lista => 
      lista.map(solicitud => 
        solicitud.id === id ? { ...solicitud, estado: nuevoEstado } : solicitud
      )
    );
  }
}