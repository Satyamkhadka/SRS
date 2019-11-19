import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  readonly URL = 'http://localhost:3000/';
  constructor(private httpClient: HttpClient) { }

  getAllStudent() {
    return this.httpClient.get(this.URL + 'getAllStudent');
  }
}
