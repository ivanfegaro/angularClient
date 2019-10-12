import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { LoginclientFormComponent } from './loginclient-form/loginclient-form.component';
import { LoginprovFormComponent } from './loginprov-form/loginprov-form.component';


const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'adduser', component: UserFormComponent },
  {path: 'loginclient', component: LoginclientFormComponent},
  {path: 'loginprov', component: LoginprovFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
