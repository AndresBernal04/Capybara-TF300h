import { Injectable,  inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Admin } from '../interfaces/admin';

@Injectable({
  providedIn: 'root'
})
export class adminService {

  // Inyección de dependencias
  private httpClient = inject(HttpClient);
  private URL_ADMIN = 'http://localhost:6000/user';

    // Petición post
    postAdmin(admin:Admin){
      return this.httpClient.post(this.URL_ADMIN,admin);
  }

}
