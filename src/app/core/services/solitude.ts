import { Injectable, signal, computed } from '@angular/core';
import type { Solitude as SolitudeModel } from '../models/solitude';

@Injectable({
  providedIn: 'root'
})
export class Solitude {
  private solicitudesSignal = signal<SolitudeModel[]>([
    {
      id: '001',
      documentoId: 1,
      grado: 'GII',
      asignatura: 'AyG',
      correo: 'a.estudiante1@deii.ulpgc.es',
      descripcion: 'Apuntes de Álgebra...',
      tipoArchivo: 'pdf',
      estado: 'Pendiente',
      urlArchivo: 'assets/docs/tema1.pdf'
    },
    {
      id: '002',
      documentoId: 2,
      grado: 'GCID',
      asignatura: 'BD1',
      correo: 'j.garcia2@deii.ulpgc.es',
      descripcion: 'Resumen de Bases de Datos...',
      tipoArchivo: 'doc',
      estado: 'Pendiente',
      urlArchivo: 'assets/docs/practica2.pdf'
    },
    {
      id: '003',
      documentoId: 3,
      grado: 'GFM',
      asignatura: 'FFI',
      correo: 'r.lozano3@deii.ulpgc.es',
      descripcion: 'Esquema de Electromagnetismo...',
      tipoArchivo: 'pdf',
      estado: 'Pendiente',
      urlArchivo: 'assets/docs/fisica.pdf'
    }
  ]);

  public solicitudes = this.solicitudesSignal.asReadonly();

  public numeroPendientes = computed(() =>
    this.solicitudesSignal().filter(s => s.estado === 'Pendiente').length
  );

  actualizarEstado(id: string, nuevoEstado: 'Aprobado' | 'Rechazado') {
    this.solicitudesSignal.update(lista =>
      lista.map(solicitud =>
        solicitud.id === id
          ? { ...solicitud, estado: nuevoEstado }
          : solicitud
      )
    );
  }

  eliminarSolicitud(id: string) {
    this.solicitudesSignal.update(lista =>
      lista.filter(solicitud => solicitud.id !== id)
    );
  }

  actualizarDesdeDocumento(documentoId: number, datos: {
  grado: string;
  asignatura: string;
  descripcion: string;
}) {
  this.solicitudesSignal.update(lista =>
    lista.map(solicitud =>
      solicitud.documentoId === documentoId
        ? {
            ...solicitud,
            grado: datos.grado,
            asignatura: datos.asignatura,
            descripcion: datos.descripcion
          }
        : solicitud
    )
  );
}
eliminarSolicitudPorDocumentoId(documentoId: number) {
  this.solicitudesSignal.update(lista =>
    lista.filter(solicitud => solicitud.documentoId !== documentoId)
  );
}
}