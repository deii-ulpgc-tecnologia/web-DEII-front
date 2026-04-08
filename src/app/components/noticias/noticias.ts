import { Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Noticia {
  id: number;
  date: string;
  title: string;
  description: string;
  imageUrl: string;
}

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './noticias.html',
  styleUrl: './noticias.css',
})

export class Noticias {

  noticias: Noticia[] = [
    {
      id: 1,
      date: '10 de octubre de 2025',
      title: 'Lorem ipsum dolor sit amet',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageUrl: 'https://es.wikipedia.org/wiki/Archivo:PlaceholderLC.png'
    },
    {
      id: 2,
      date: '15 de noviembre de 2026',
      title: 'Consectetur adipiscing elit',
      description: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageUrl: 'https://es.wikipedia.org/wiki/Archivo:PlaceholderLC.png'
    },
    {
      id: 3,
      date: '20 de diciembre de 2027',
      title: 'Sed do eiusmod tempor',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imageUrl: 'https://es.wikipedia.org/wiki/Archivo:PlaceholderLC.png'
    }
  ];

  index = 0;
  private router = inject(Router);
  private touchStartX = 0;
  private touchEndX = 0;

  get starredNoticia() {
    return this.noticias[this.index];
  }

  nextNoticia() {
    this.index = (this.index + 1) % this.noticias.length;
  }

  lastNoticia() {
    this.index = (this.index - 1 + this.noticias.length) % this.noticias.length;
  }

  goToNoticia(id: number) {
    this.router.navigate(['/noticia', id]);
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
