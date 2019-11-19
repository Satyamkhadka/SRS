import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration/registration.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import swal from 'sweetalert2';
@Component({
  selector: 'app-status-student',
  templateUrl: './status-student.component.html',
  styleUrls: ['./status-student.component.css']
})
export class StatusStudentComponent implements OnInit {
  studentForm: FormGroup;
  selectedStudent: JSON;
  constructor(private registrationService: RegistrationService, private formBuilder: FormBuilder) {
    this.studentForm = this.formBuilder.group({
      fullname: '',
      email: ''
    });
  }

  ngOnInit() {
  }
  submit(data) {
    this.registrationService.getStudent(data).subscribe(response => {
      if (response.success === true) {
        this.selectedStudent = response.data[0];
        if (response.data.length === 0) {
          swal.fire(
            'oops',
            'Credentials dont match',
            'warning'
          );
        }
      } else {
        swal.fire(
          'oops',
          'Credentials dont match',
          'warning'
        );
      }
    });
  }
}
