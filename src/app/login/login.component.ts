import { LoginService } from './login.services';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private logingService: LoginService) { }

  ngOnInit(): void {
  }

  login(formu: NgForm){
    const email = formu.value.email;
    const password = formu.value.password;
    this.logingService.login(email, password);
  }
}

