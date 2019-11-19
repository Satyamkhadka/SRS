import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import swal from 'sweetalert2';
import { RegistrationService } from '../registration/registration.service';
@Component({
  selector: 'app-status-admin',
  templateUrl: './status-admin.component.html',
  styleUrls: ['./status-admin.component.css']
})
export class StatusAdminComponent implements OnInit {
  allStudent = [];
  statusForm: FormGroup;
  constructor(private student: StudentService, private formBuilder: FormBuilder, private registrationService: RegistrationService) {
    this.getAllStudent();
  }

  ngOnInit() {
  }
  getAllStudent() {
    this.student.getAllStudent().subscribe(data => {
      // tslint:disable-next-line: no-string-literal
      if (data['success'] === true) {
        // tslint:disable-next-line: no-string-literal
        this.allStudent = data['data'];
      } else {
        swal.fire(
          'Problem',
          // tslint:disable-next-line: no-string-literal
          data['message'],
          'error'
        );
      }
    });
  }

  changeStatus(id, status) {
    const data = {
      id,
      status
    }
    this.registrationService.changeStatus(data).subscribe((response) => {
      if (response.success === true) {
        swal.fire(
          'Done',
          response.message,
          'success'
        );
      } else {
        swal.fire(
          'error',
          response.message,
          'error'
        );
      }
    });
  }

}
