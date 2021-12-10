import { ClientesService } from './../clientes.service';
import { Cliente } from './../cliente/cliente';


import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Reserva } from './reserva';


@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  clientes: Cliente[]= [];
  reserva: Reserva;

  constructor(private router: Router, private clienteService: ClientesService) { 
    this.reserva = new Reserva();
  }

  reservaParaOpcao(): void{
    this.router.navigate(['/opcao']);
  }

  ngOnInit(): void {
    this.clienteService.getClientes()
    .subscribe(response => this.clientes = response);
  }

  onSubmit(){
    console.log(this.reserva);
  }
  
}
