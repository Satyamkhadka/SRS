import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StatusAdminComponent } from './status-admin/status-admin.component';
import { StatusStudentComponent } from './status-student/status-student.component';
import { EasyNavigationComponent } from './easy-navigation/easy-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    StatusAdminComponent,
    StatusStudentComponent,
    EasyNavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
