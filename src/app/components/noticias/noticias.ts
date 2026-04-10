import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NoticiasService } from '../../core/services/noticias';
import { Noticia } from '../../core/models/noticia';

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './noticias.html',
  styleUrl: './noticias.css',
})
export class Noticias {
  private noticiasService = inject(NoticiasService);
  private router = inject(Router);

  // Lista de noticias general (ordenada: fijadas primero)
  noticias = this.noticiasService.noticiasOrdenadas;
 
  // El carrusel solo muestra las fijadas (Si no hay ninguna fijada, se muestra todas).
  noticiasCarrusel = computed(() => {
    const fijadas = this.noticias().filter(n => n.pinned);
    return fijadas.length > 0 ? fijadas : this.noticias();
  });

  // Estado del botón "Ver como Delegado"
  esDelegado = signal(false);

  index = 0;
  private touchStartX = 0;
  private touchEndX = 0;

  // Devuelve la noticia actual del carrusel de forma segura
  get starredNoticia() {
    const carrusel = this.noticiasCarrusel();
    // Previene errores si borramos la noticia que se está previsualizando
    return carrusel[this.index % carrusel.length]; 
  }

  // --- LÓGICA DEL CARRUSEL ---
  nextNoticia() {
    const total = this.noticiasCarrusel().length;
    this.index = (this.index + 1) % total;
  }

  lastNoticia() {
    const total = this.noticiasCarrusel().length;
    this.index = (this.index - 1 + total) % total;
  }

  // --- LÓGICA DE DELEGADO ---
  toggleRol() {
    this.esDelegado.update(val => !val);
  }

  irACrearNoticia() {
    this.router.navigate(['/noticias/crear']);
  }

  irAEditarNoticia(id: number) {
    this.router.navigate(['/noticias/editar', id]);
  }

  toggleFijar(id: number) {
    this.noticiasService.togglePinNoticia(id);
    this.index = 0; // Se vuelve a la primera del carrusel al fijar/desfijar
  }

  borrarNoticia(noticia: Noticia) {
    if (confirm(`¿Estás TOTALMENTE seguro de que quieres borrar la noticia "${noticia.title}"?`)) {
      this.noticiasService.deleteNoticia(noticia.id);
      this.index = 0; 
    }
  }

  // --- NAVEGACIÓN Y SWIPE ---
  irANoticia(id: number) {
    this.router.navigate(['/noticias', id]);
  }

  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.changedTouches[0].screenX;
  }

  onTouchEnd(event: TouchEvent) {
    this.touchEndX = event.changedTouches[0].screenX;
    this.detectarDireccionArrastre();
  }

  detectarDireccionArrastre() {
    const distanciaMinima = 50; 
    if (this.touchEndX < this.touchStartX - distanciaMinima) {
      this.nextNoticia(); 
    } else if (this.touchEndX > this.touchStartX + distanciaMinima) {
      this.lastNoticia();
    }
  }
}