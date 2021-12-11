import { Cliente } from './cliente/cliente';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {


  baseUrl= "http://localhost:8080/api/clientes";

  constructor(private http: HttpClient) { }

  cadastrarCliente(cliente : Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.baseUrl, cliente)
  }
  
  getClientes() : Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.baseUrl);
  }


  // getClientes():Cliente[]{
  //   let cliente = new Cliente();
  //   cliente.email = "teste@gmail.com";
  //   cliente.nome = "Teste";
  //   cliente.endereco= "rua Um";
  //   return[cliente];
  // }

  // getCliente(): Cliente{
  //   let cliente : Cliente = new Cliente();
  //   cliente.cpf = "12346";
  //   cliente.nome = "Jose";
  //   cliente.email = "jose@gmail";
  //   cliente.telefone = '123456'; 
  //   return cliente;
  // }
}
