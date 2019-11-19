import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { StatusAdminComponent } from './status-admin/status-admin.component';
import { StatusStudentComponent } from './status-student/status-student.component';

const routes: Routes = [
  { path: '', component: RegistrationComponent },
  { path: 'approve-registration', component: StatusAdminComponent },
  { path: 'check-registration', component: StatusStudentComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
