import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Personaje } from '../models/personaje';

const API_URL = 'http://localhost:5235/api';

@Injectable({ providedIn: 'root' })
export class PersonajeService {
  constructor(private http: HttpClient) {}

  getPersonajes(): Observable<Personaje[]> {
    return this.http.get<Personaje[]>(`${API_URL}/personajes`);
  }

  getPersonaje(nombre: string): Observable<Personaje> {
    return this.http.get<Personaje>(`${API_URL}/personajes/${nombre}`);
  }
}
