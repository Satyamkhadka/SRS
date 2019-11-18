import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  formPane = 1;
  studentForm: FormGroup;
  file: File;
  constructor(private formBuilder: FormBuilder) {

    this.studentForm = this.formBuilder.group({
      fullname: '',
      email: '',
      contact: '',
      program: '',
      docs: '',
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
    console.log(data);

  }
  onFileChange(file) {
    this.file = file;
  }
}
