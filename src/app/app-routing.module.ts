import { LoginGuardian } from './login/login.guardian.service';

import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { PersonaComponent } from './personas/persona/persona.component';
import { FormularioComponent } from './personas/formulario/formulario.component';
import { PersonasComponent } from './personas/personas.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';

const routes: Routes =[
  {path: '', component: PersonasComponent, canActivate: [LoginGuardian]},
  {path: 'personas', component: PersonasComponent, canActivate: [LoginGuardian] ,children: [
    {path: 'agregar', component: FormularioComponent},
    {path: ':id', component: FormularioComponent}
]},
 { path: 'login', component: LoginComponent},
 { path: '**', component: ErrorComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
