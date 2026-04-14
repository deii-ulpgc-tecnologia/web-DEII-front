import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Noticias } from './components/noticias/noticias';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('web-deii-front');
}
