import { ReservaSalva } from './../reservaSalva';
import { ListaService } from './../lista.service';
import { ReservaService } from './../../reserva/reserva.service';
import { Reserva } from './../../reserva/reserva';
import { ClientesService } from './../../clientes.service';
import { Cliente } from './../../cliente/cliente';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.css']
})
export class ListaClienteComponent implements OnInit {

  clientes: Cliente[] = [];
  lista: ReservaSalva[] = [];
  cliente!: number;
  mensagem!: string;
  reserva!: Reserva;
  constructor(
    private router: Router,
    private service: ClientesService,
    private listaService: ListaService) { }

  voltaListaReserva() {
    this.router.navigate([('/lista-reserva')])
  }
  ngOnInit(): void {
    this.service.getClientes()
      .subscribe(response => this.clientes = response)
  }

  getReservaClientePorId() {

    this.listaService.getReservaCliente(this.cliente).subscribe(resposta => this.lista = resposta);
      
  }
  

}
