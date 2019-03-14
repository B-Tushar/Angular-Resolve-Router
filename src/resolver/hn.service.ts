import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HnService {
  constructor(private http: HttpClient) {}

  getPost() {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts`);
 }
}