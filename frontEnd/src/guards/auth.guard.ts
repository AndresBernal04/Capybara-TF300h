// Tipo de guard -> canActivate -> nos permite acceder o no a una ruta según autorización
import { CanActivateFn } from '@angular/router';
import { LoginService } from '../services/login.service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';


// Son métodos que devuelven falso o verdadero, si es verdadero accede a la ruta protegida, si es falso no accede a la ruta protegida
export const authGuard: CanActivateFn = (route, state) => {

  // Inyectar dependencias o servicios
  const router = inject(Router);
  const loginService = inject(LoginService); 


  // Si no está logueado -> No debe acceder
  if (loginService.isLogged()) {
    router.navigate(['/'])
    return false
  }

  // Si está logueado, pero no es admin -> No debe acceder
  if (!loginService.isAdmin) {
    router.navigate(['/'])
    return false
  }



  return true;
};
