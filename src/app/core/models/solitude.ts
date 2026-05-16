export interface Solitude {
  id: string;
  documentoId: number;
  grado: string;
  asignatura: string;
  correo: string;
  descripcion: string;
  tipoArchivo: 'pdf' | 'doc';
  estado: 'Pendiente' | 'Aprobado' | 'Rechazado';
  urlArchivo: string;
}