import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  readonly ROOT_URL = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

  register(data): any {
    return this.http.post(this.ROOT_URL + 'register', data);
  }
  changeStatus(data): any {
    return this.http.post(this.ROOT_URL + 'change-status', data);
  }
  getStudent(data): any {
    return this.http.post(this.ROOT_URL + 'getStudent', data);
  }
}
