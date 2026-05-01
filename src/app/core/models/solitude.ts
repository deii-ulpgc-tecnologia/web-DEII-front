export interface Solitude {
  id: string;
  grado: string;
  asignatura: string;
  correo: string;
  descripcion: string;
  tipoArchivo: 'pdf' | 'doc';
  estado: 'Pendiente' | 'Aprobado' | 'Rechazado';
}