import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Credentials } from '../interfaces/credentials';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private httpClient = inject(HttpClient);
  private router = inject(Router);
  private API_URL = 'http://localhost:6000/login';

  login(credenciales: Credentials): Observable<any>{
    return this.httpClient.post(this.API_URL, credenciales);
  }

  getToken() {
    return localStorage.getItem("token");
  }

  isAdmin() {
    const token = this.getToken();
    if (token) {
      const decoded: any = jwtDecode(token);
      return decoded.isAdmin || false;
    } else {
      console.error("No se encontró token");
      return false;
    }
  }

  redirect() {
    if (this.isAdmin()) {
      this.router.navigate(['/admin']);
    } else {
      this.router.navigate(['/']);
    }
  }

  isLogged() {
    return this.getToken() ? true : false;
  }
}