import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    // inyección de dependencias
    private httpClient = inject(HttpClient);
    private URL_USERS = 'http://localhost:6000/user'


    // Petición get, post, delete

    // Obtener usuarios
    getUsers(){
        return this.httpClient.get(this.URL_USERS)   
    }
    
    // Crear usuarios
    postUsers(user:User){
        return this.httpClient.post(this.URL_USERS,user);
    }

    // Eliminar usuarios
    deleteUsers(id:string){
        return this.httpClient.delete(`${this.URL_USERS}/${id}`);
    }
    
  constructor() { }
}
