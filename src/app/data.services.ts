import { LoginService } from './login/login.services';
import { LoggingService } from './loggingService.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';

@Injectable()
export class DataServices{
  constructor(private httpClient: HttpClient,
              private loginService: LoginService){}

  cargarPersonas(){
    const token = this.loginService.getIdToken();
    return this.httpClient.get('https://listado-personas-6e11e-default-rtdb.firebaseio.com/datos.json?auth=' + token);
  }

  guardarPersonas(personas: Persona[]){
    const token = this.loginService.getIdToken();
    this.httpClient.put('https://listado-personas-6e11e-default-rtdb.firebaseio.com/datos.json?auth=' + token, personas )
      .subscribe(
      response => console.log('resultado de guardar Personas: ' + response),
      error => console.log('error al guargar Personas' + error)
    );
  }

  modificarPersona(index:number, persona: Persona){
    const token = this.loginService.getIdToken();
    let url: string;
    url = 'https://listado-personas-6e11e-default-rtdb.firebaseio.com/datos' + index + '.json?auth=' + token;
    this.httpClient.put(url, persona)
    .subscribe(
      response => console.log("resultado de modificar Persona:" + response),
      error => console.log("Error en modificar Persona:" + error)
    )
  }

  eliminarPersona(index:number){
    const token = this.loginService.getIdToken();
    let url: string;
    url = 'https://listado-personas-6e11e-default-rtdb.firebaseio.com/datos' + index + '.json?auth=' + token;
    this.httpClient.delete(url)
    .subscribe(
      response => console.log("resultado de Eliminar Persona:" + response),
      error => console.log("Error en eliminar Persona:" + error)
    )
  }
}
