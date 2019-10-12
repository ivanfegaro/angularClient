import { Component, OnInit } from '@angular/core';
import {LoginclientService } from '../service/loginclient.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SesionService } from '../service/sesion.service';
import {Sesion} from '../model/sesion';


@Component({
  selector: 'app-loginclient-form',
  templateUrl: './loginclient-form.component.html',
  styleUrls: ['./loginclient-form.component.css']
})
export class LoginclientFormComponent implements OnInit {



  constructor(private router: Router, private loginService: LoginclientService,
              private sesionService: SesionService) { }

  ngOnInit() {
  }

  logIn(username: string, password: string, event: Event) {
    event.preventDefault();
    this.loginService.login(username, password).subscribe(
      res => {
        const u: Sesion = {  usuario : username , password : password};
        this.sesionService.setUserLoggedIn(u);
      },
      error => {
        alert('Usuario o Contrasena Incorrectos');
        console.error(error);
      },
      () => this.navigate()
    );
  }

  navigate() {
    this.router.navigateByUrl('/users');
  }

}
