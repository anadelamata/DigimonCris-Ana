import { Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ErrorComponent } from './componentes/error/error.component';
import { PersonajesComponent } from './componentes/personajes/personajes.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/register/register.component';
import { PersonajeComponent } from './componentes/personaje/personaje.component';
import { ProductosComponent } from './componentes/productos/productos.component';


export const routes: Routes = [
    {
        path: "",
        redirectTo: "Login",
        pathMatch: 'full'
      },//Primera ruta. Cada ruta va dentro de unas llaves.
      {
        path: "inicio",
        component: InicioComponent
      },
      {
        path: "personajes",
        component: PersonajesComponent
      },
      {
        path: "contacto",
        component: ContactoComponent
      },
      {
        path:"Login",
        component: LoginComponent
      },
      {
        path:"Registro",
        component: RegisterComponent
      },
      
      {
        path: "register",
        component: RegisterComponent
      },
      {
        path: "personajes/:id",
        component: PersonajeComponent
      },
      {
        path: "productos",
        component:ProductosComponent
      },

      {
        path:"**",
        component: ErrorComponent
      }
];
