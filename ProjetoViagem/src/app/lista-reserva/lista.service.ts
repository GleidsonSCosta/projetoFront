import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReservaSalva } from './reservaSalva';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaService {
  baseUrl = "http://localhost:8080/api/viagem";
  baseUrlCliente = "http://localhost:8080/api/viagem/cliente"
  constructor(private http: HttpClient) { }
  
  getReserva(): Observable<ReservaSalva[]> {
    return this.http.get<ReservaSalva[]>(this.baseUrl);
  }

  getReservaCliente(cliente: number): Observable<ReservaSalva[]> {
    // const httpParam = new HttpParams()
    // .set("", cliente)
    const url = this.baseUrlCliente + "/" + cliente;
    return this.http.get<ReservaSalva[]>(url);
  }
  
}
