import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserServiceService } from '../service/user-service.service';
import { Sesion} from '../model/sesion';
import { SesionService} from '../service/sesion.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];
  usserLogged: Sesion;
  constructor(private userService: UserServiceService, private sesionService: SesionService) {
  }

  ngOnInit() {
    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
    this.usserLogged = this.sesionService.getUserLoggedIn();
    console.log('test user list:', this.usserLogged);
  }
}
