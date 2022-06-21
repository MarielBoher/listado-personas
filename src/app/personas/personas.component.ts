import { LoginService } from './../login/login.services';
import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona.model';
import { PersonaService } from '../personas.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  personas: Persona[] = [];


  constructor(private loginService: LoginService,
              private PersonaService:PersonaService,
              private router:Router){}

  ngOnInit(): void {
      this.PersonaService.obtenerPersonas().subscribe((personas: Object) =>{
        this.personas = personas as Persona [];
        this.PersonaService.setPersonas(personas as Persona[]);

      })
  }

  agregar(){
    this.router.navigate(['personas/agregar'])
  }

}
