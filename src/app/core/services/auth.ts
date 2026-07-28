import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  
  // Cambiar por la URL de tu backend Django
  private apiUrl = 'https://deii.narurm.eu/api'; 

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login/`, { username, password })
      .pipe(
        tap((response: any) => {
          if (response && response.access) {
            localStorage.setItem('accessToken', response.access);
            localStorage.setItem('refreshToken', response.refresh);
          }
        })
      );
  }

  logout(): void {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('accessToken');
  }

  checkGroup(groupName: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/check-group/?group=${groupName}`);
  }
}