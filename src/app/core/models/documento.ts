export interface Documento {
  id: number;
  nombre: string;
  asignatura: string;
  carrera: string;
  curso: string;
  tipo: 'Teoría' | 'Prácticas';
  pdfUrl: string;
}