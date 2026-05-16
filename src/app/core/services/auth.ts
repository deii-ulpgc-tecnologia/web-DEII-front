import { Injectable, computed, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface LoginRequest {
  username: string;
  password: string;
}

interface LoginResponse {
  access: string;
  refresh: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router);

  private apiUrl = 'http://127.0.0.1:8000/api';

  accessToken = signal<string | null>(localStorage.getItem('access'));
  refreshToken = signal<string | null>(localStorage.getItem('refresh'));

  estaLogueado = computed(() => !!this.accessToken());

  login(data: LoginRequest) {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login/`, data);
  }

  guardarTokens(tokens: LoginResponse) {
    localStorage.setItem('access', tokens.access);
    localStorage.setItem('refresh', tokens.refresh);

    this.accessToken.set(tokens.access);
    this.refreshToken.set(tokens.refresh);
  }

  logout() {
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');

    this.accessToken.set(null);
    this.refreshToken.set(null);

    this.router.navigate(['/login']);
  }

  getAccessToken() {
    return this.accessToken();
  }
}