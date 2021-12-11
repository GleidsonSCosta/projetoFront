import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReservaSalva } from './reservaSalva';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaService {
  baseUrl= "http://localhost:8080/api/viagem";
  constructor(private http: HttpClient) { }
  getReserva() : Observable<ReservaSalva[]> {
    return this.http.get<ReservaSalva[]>(this.baseUrl);
  }
}
