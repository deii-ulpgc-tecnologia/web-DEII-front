import { Injectable, signal, computed } from '@angular/core';
import { Noticia } from '../models/noticia';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  // "base de datos" simulada con Signals
  private noticiasState = signal<Noticia[]>([
    { id: 1, date: '10 de oct 2025', title: 'Noticia Importante', description: 'Lorem...', imageUrl: '...', pinned: true }, // Empieza fijada
    { id: 2, date: '15 de nov 2026', title: 'Noticia Normal', description: 'Consectetur...', imageUrl: '...', pinned: false },
    { id: 3, date: '20 de dic 2027', title: 'Noticia Reciente', description: 'Sed do eiusmod...', imageUrl: '...', pinned: false }
  ]);

  // Primero las fijadas (pinned), luego el resto (puedes añadir orden por fecha también).
  noticiasOrdenadas = computed(() => {
    return this.noticiasState().sort((a, b) => {
      if (a.pinned === b.pinned) return 0; // Si ambos son iguales, no cambia
      return a.pinned ? -1 : 1; // Si 'a' está fijada, va primero
    });
  });

  constructor() { }

  // Obtener una noticia por ID para editarla
  getNoticiaPorId(id: number): Noticia | undefined {
    return this.noticiasState().find(n => n.id === id);
  }

  // --- Operaciones CRUD (Simuladas) ---

  // CREATE
  addNoticia(nuevaNoticia: Omit<Noticia, 'id' | 'pinned'>) {
    const noticiaCompleta: Noticia = {
      ...nuevaNoticia,
      id: Date.now(), // Generamos ID temporal
      pinned: false // Empieza sin fijar por defecto
    };
    this.noticiasState.update(noticias => [noticiaCompleta, ...noticias]);
  }

  // UPDATE
  updateNoticia(noticiaActualizada: Noticia) {
    this.noticiasState.update(noticias =>
      noticias.map(n => n.id === noticiaActualizada.id ? noticiaActualizada : n)
    );
  }

  // UPDATE (Solo fijar/desfijar)
  togglePinNoticia(id: number) {
    this.noticiasState.update(noticias =>
      noticias.map(n => n.id === id ? { ...n, pinned: !n.pinned } : n)
    );
  }

  // DELETE
  deleteNoticia(id: number) {
    this.noticiasState.update(noticias => noticias.filter(n => n.id !== id));
  }
}