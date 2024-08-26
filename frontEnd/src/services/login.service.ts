// inject -> nos permite inyectar dependencias
import { Inject, Injectable, inject } from '@angular/core';

// Nos permite hacer peticiones http
import { HttpClient } from '@angular/common/http';

// Nos permite redireccionar dentro de nuestro proyecto
import { Router } from '@angular/router';

// Nos permite gestionar los mensajes de éxito, error o advertencia dentro del proyecto
import { ToastrService } from 'ngx-toastr';

// Nos permite decodificar nuestro token
import { jwtDecode } from 'jwt-decode';

// Nuestra interfaz que contiene la estructura de las credenciales
import { Credentials } from '../interfaces/credentials';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    private httpClient = inject(HttpClient); //Si es 
    private router = inject(Router);
    public toastrService = inject(Inject);
    private API_URL = "http://localhost:6000/login";

    // Validación de credenciales con la petición post 
    login(credenciales: Credentials) {
        return this.httpClient.post(this.API_URL, credenciales)
    }

    // Acceder y guardar nuetro token
    // Los tokens se almacenan de forma local -> LocalStorage -> almacenamiento temporal
    getToken(){
        // Nos permite acceder al token almacenado temporal
        return localStorage.getItem("token")
    }

    // Validación si es o no administrador
    isAdmin(){
        // Accedo al token guardado en mi almacenamiento temporal
        const token = this.getToken();

        // Si existe token decodifiquelo con jwtDecode y guardelo en la constante decoded
        if (token){
            const decoded: any = jwtDecode(token);
            // Si isAdmin existe me retorna true
            // Si no existe is admin me retorna false
            return decoded.isAdmin || false;
        } else{
            console.error("No se encontró token");
            return false
        }
    }

    // Redireccionar a ruta pública si es usuario y a ruta privada si es admin
    redirect(){
      if(this.isAdmin()){
        this.router.navigate(['/private']);
      } else{
        this.router.navigate(['/']);
      } 
    }


    // Nos guarda si inició sesión o no
    isLogged(){
        // retorna verdadero o falso si hay o no token
        return this.getToken() ? true : false;
    }


    // Nos permita cerrar sesión
    logout(){
        // Mensaje para el usuario
        this.toastrService.info("La sesión se ha cerrado correctamente.");
        // Nos elimina el mtojen del almacenamiento temporal
        localStorage.removeItem("Token");
        // Redirección a la página de inicio
        this.router.navigate(['/'])
    }

}

