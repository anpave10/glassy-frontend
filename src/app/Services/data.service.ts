import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private baseUrl = 'http://localhost:8000/api/';

  constructor(private http: HttpClient,
    private token: TokenService) { }

  signup(data) {
    return this.http.post(`${this.baseUrl}signup`, data)
  }

  login(data) {
    return this.http.post(`${this.baseUrl}login`, data)
  }

  logout() {

    const opciones = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token.get()
      })
    }

    return this.http.post(`${this.baseUrl}logout`, null , opciones);
  }
}
