import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserServiceService } from './service/user-service.service';
import { LoginclientFormComponent } from './loginclient-form/loginclient-form.component';
import { LoginprovFormComponent } from './loginprov-form/loginprov-form.component';
import {LoginclientService} from './service/loginclient.service';
import {SesionService} from './service/sesion.service';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserFormComponent,
    LoginclientFormComponent,
    LoginprovFormComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [UserServiceService, LoginclientService, SesionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
