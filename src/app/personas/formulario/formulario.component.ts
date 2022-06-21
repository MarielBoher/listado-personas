import { Persona } from './../../persona.model';
import { LoggingService } from './../../loggingService.service';
import { PersonaService } from './../../personas.service';
import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit{

  nombreInput:string = '';
  apellidoInput:string = '';
  index: number;
  modoEdicion:number;


constructor(private LoggingService:LoggingService,
            private PersonaService: PersonaService,
            private router: Router,
            private route: ActivatedRoute){
this.PersonaService.saludar.subscribe(
  (indice: number) => alert("el indice es:" + indice)
);
}

ngOnInit(): void {
 this.index = this.route.snapshot.params['id'];
 this.modoEdicion = +this.route.snapshot.queryParams['modoEdicion'];


 if(this.modoEdicion != null && this.modoEdicion === 1 ){
  let persona: Persona = this.PersonaService.encontrarPersona(this.index);
  this.nombreInput = persona.nombre;
  this.apellidoInput = persona.apellido;
 }
}

  onGuardarPersona(){
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    if(this.modoEdicion != null && this.modoEdicion === 1 ){
      this.PersonaService.modificarPersona(this.index, persona1);

    }else{
      this.PersonaService.agregarPersona(persona1);
    }
    this.PersonaService.agregarPersona(persona1);
    this.router.navigate(['personas'])
  }

  eliminarPersona(){
    if(this.index != null){
      this.PersonaService.eliminarPersona(this.index);
    }
    this.router.navigate(['personas']);
  }


}
