import { ListaService } from './lista.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ReservaSalva } from './reservaSalva';

@Component({
  selector: 'app-lista-reserva',
  templateUrl: './lista-reserva.component.html',
  styleUrls: ['./lista-reserva.component.css']
})
export class ListaReservaComponent implements OnInit {

  lista: ReservaSalva[] = [];
 

  constructor(private router: Router, private reservaService: ListaService) {

  }

  consReservParaOpcao() {
    this.router.navigate(["/opcao"]);
  }
  consultaCliente(){
    this.router.navigate(['/lista-cliente']);
  }
  
  ngOnInit(): void {
    this.reservaService.getReserva().subscribe(resposta => this.lista = resposta);
  }


}
