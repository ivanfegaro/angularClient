import { Injectable } from '@angular/core';
import {Sesion} from '../model/sesion';

@Injectable()
export class SesionService {

  private isUserLoggedIn;
  public usserLogged: Sesion;

  constructor() {
    this.isUserLoggedIn = false;
  }

  setUserLoggedIn(user: Sesion) {
    this.isUserLoggedIn = true;
    this.usserLogged = user;
    localStorage.setItem('currentUser', JSON.stringify(user));

  }

  getUserLoggedIn() {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

}
