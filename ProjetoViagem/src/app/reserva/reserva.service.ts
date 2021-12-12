import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Reserva } from './reserva';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ReservaService {
  baseUrl = "http://localhost:8080/api/viagem";
  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  salvarReserva(reserva: Reserva): Observable<Reserva> {
    return this.http.post<Reserva>(this.baseUrl, reserva)
  }

  mostrarMensagem(msg: string): void {
    this.snackBar.open(msg, '', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "bottom"
    })
  }

  getReserva(): Observable<Reserva[]> {
    return this.http.get<Reserva[]>(this.baseUrl);
  }

}
