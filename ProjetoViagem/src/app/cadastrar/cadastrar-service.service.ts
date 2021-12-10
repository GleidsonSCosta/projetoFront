import { Cliente } from './cliente';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CadastrarServiceService {

  baseUrl= "http://localhost:8080/api/clientes";

  constructor(private snackBar: MatSnackBar, private http: HttpClient ) { }

  mostrarMensagem(msg: string): void {
    this.snackBar.open(msg, '',{
      duration: 3000,
      horizontalPosition:"right",
      verticalPosition:"bottom"
    })
  }

  cadastrarCliente(cliente : Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.baseUrl, cliente)
  }
  
  getClientes() : Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.baseUrl);
  }

}

