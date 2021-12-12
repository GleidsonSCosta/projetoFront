import { Cliente } from './../cliente/cliente';

import { ClientesService } from './../clientes.service';

import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarComponent implements OnInit {

  clientes: Cliente[] = [];

  constructor(private router: Router, private service: ClientesService) {

  }

  consultarParaOpcao(): void {
    this.router.navigate(['/opcao']);
  }
  ngOnInit(): void {
    this.service.getClientes().subscribe(resposta => this.clientes = resposta);
  }

}
