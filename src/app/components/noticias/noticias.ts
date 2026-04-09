import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; // Para ir al formulario de creación
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

  // Exponemos la lista ordenada automáticamente del servicio
  noticias = this.noticiasService.noticiasOrdenadas;

  // 👈 NUEVO SIGNAL: Simula el rol (false = Público, true = Delegado)
  esDelegado = signal(false);

  index = 0;
  private touchStartX = 0;
  private touchEndX = 0;

  get starredNoticia() {
    return this.noticias()[this.index];
  }

  nextNoticia() {
    this.index = (this.index + 1) % this.noticias().length;
  }

  lastNoticia() {
    this.index = (this.index - 1 + this.noticias().length) % this.noticias().length;
  }

  // --- LÓGICA DE GESTIÓN (Solo Delegado) ---

  // Cambiar el rol temporalmente (para el botón de arriba)
  toggleRol() {
    this.esDelegado.update(val => !val);
  }

  // Ir a la página de creación
  irACrearNoticia() {
    this.router.navigate(['/noticias/crear']);
  }

  // Ir a la página de edición (mismo formulario pero con ID)
  irAEditarNoticia(id: number) {
    this.router.navigate(['/noticias/editar', id]);
  }

  toggleFijar(id: number) {
    this.noticiasService.togglePinNoticia(id);
  }

  borrarNoticia(noticia: Noticia) {
    // CONFIRMACIÓN EXPLÍCITA
    const confirmacion = confirm(`¿Estás TOTALMENTE seguro de que quieres borrar la noticia "${noticia.title}"? Esta acción no se puede deshacer.`);
    
    if (confirmacion) {
      this.noticiasService.deleteNoticia(noticia.id);
      // Si borramos la que estaba destacada en el carrusel, reseteamos el índice
      if (this.index >= this.noticias().length) {
        this.index = 0;
      }
    }
  }
  
  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.changedTouches[0].screenX;
  }

  onTouchEnd(event: TouchEvent) {
    this.touchEndX = event.changedTouches[0].screenX;
    this.handleSwipe();
  }

  private handleSwipe() {
    const swipeThreshold = 50; // Mínimo desplazamiento para considerar un swipe
    if (this.touchEndX < this.touchStartX - swipeThreshold) {
      this.nextNoticia();
    } else if (this.touchEndX > this.touchStartX + swipeThreshold) {
      this.lastNoticia();
    }
  }
}
