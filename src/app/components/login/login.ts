import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  private authService = inject(AuthService);
  private router = inject(Router);

  username = signal('');
  password = signal('');
  error = signal('');

  iniciarSesion() {
    this.error.set('');

    this.authService.login({
      username: this.username(),
      password: this.password()
    }).subscribe({
      next: tokens => {
        this.authService.guardarTokens(tokens);
        this.router.navigate(['/']);
      },
      error: () => {
        this.error.set('Usuario o contraseña incorrectos.');
      }
    });
  }
}