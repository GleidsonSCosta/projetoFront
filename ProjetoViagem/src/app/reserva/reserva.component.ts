import { ReservaService } from './reserva.service';
import { ClientesService } from './../clientes.service';
import { Cliente } from './../cliente/cliente';


import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Reserva } from './reserva';
import { ThrowStmt } from '@angular/compiler';


@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  clientes: Cliente[] = [];
  reserva: Reserva;

  constructor(
    private router: Router,
    private clienteService: ClientesService,
    private reservaService: ReservaService) {
    this.reserva = new Reserva();
  }
  reservaParaOpcao(): void {
    this.router.navigate(['/opcao']);
  }


  ngOnInit(): void {
    this.clienteService.getClientes()
      .subscribe(response => this.clientes = response);
  }

  // onSubmit(){
  //   this.reservaService.salvarReserva(this.reserva).subscribe(response => {
  //     console.log(response);
  //   })
  // }

  onSubmit() {
    this.reservaService.salvarReserva(this.reserva).subscribe(() => {
      this.reservaService.mostrarMensagem('Reserva Realizada com sucesso!')
      this.reserva = new Reserva();
    })
  }

}
