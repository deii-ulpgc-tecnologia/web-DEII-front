import { Component, signal, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../core/services/auth';

@Component({
  selector: 'app-login',
  imports: [FormsModule], 
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  // Inyección de dependencias moderna
  private authService = inject(AuthService);
  private router = inject(Router);

  // Definición de los Signals
  username = signal('');
  password = signal('');
  error = signal<string | null>(null);
  isLoading = signal(false);

  iniciarSesion(): void {
    const currentUsername = this.username();
    const currentPassword = this.password();

    if (!currentUsername || !currentPassword) {
      this.error.set('Por favor, rellena el usuario y la contraseña.');
      return;
    }

    this.isLoading.set(true);
    this.error.set(null);

    this.authService.login(currentUsername, currentPassword).subscribe({
      next: () => {
        this.isLoading.set(false);
        this.router.navigate(['/']); 
      },
      error: (err) => {
        this.isLoading.set(false);
        console.error('Error en el login:', err);
        this.error.set('Usuario o contraseña incorrectos.');
      }
    });
  }
}