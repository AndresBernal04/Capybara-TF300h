import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { GaleryComponent } from './components/galery/galery.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';


export const routes: Routes = [ 
    {path:'home', title: 'Home', component: HomeComponent},
     // Nos sirve para enrutar
    {path: 'contact', title: 'Contact', component: ContactComponent},
    {path: 'galery', title: 'Galery', component: GaleryComponent},
    {path: '**', title: '404', component: PageNotFoundComponent},
    {path: 'login', title: 'Login', component: LoginComponent},
    {path: 'register', title: 'Register', component: RegisterComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'}
];


