import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RegistrationService } from './registration.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  formPane = 1;
  studentForm: FormGroup;
  file: File;
  constructor(private formBuilder: FormBuilder, private registrationService: RegistrationService) {

    this.studentForm = this.formBuilder.group({
      fullname: '',
      email: '',
      contact: '',
      program: '',
      doc: '',
      previous_college: '',
      batch: ''
    });

  }

  ngOnInit() {
  }
  next() {
    this.formPane = 2;
  }
  prev() {
    this.formPane = 1;
  }
  submit(data) {

    this.registrationService.register(data).subscribe((response) => {
      if (response.success === true) {
        swal.fire(
          'Sent for approval',
          'Please check back again to see approval status ' + response.message,
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
  onFileChange(file) {
    this.file = file;
  }
}
