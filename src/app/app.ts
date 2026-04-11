import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Noticias } from './components/noticias/noticias';
import { Header } from './header/header';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('web-deii-front');
}
