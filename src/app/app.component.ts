import { LoginService } from './login/login.services';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  titulo = 'Listado de Personas';

  constructor(private loginService: LoginService){}

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyCUk8d2XkmrGPVQOL1r5M8sm1BBSfaNJ6Q",
      authDomain: "listado-personas-6e11e.firebaseapp.com",
    })
  }

  isAutenticado(){
    return this.loginService.isAutenticado();
  }

  salir(){
    this.loginService.logout();
  }
}
