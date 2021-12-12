import { Cliente } from './../cliente/cliente';
import { ClientesService } from './../clientes.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  cliente: Cliente;

  constructor(private router: Router, private service: ClientesService) {
    this.cliente = new Cliente();
  }

  ngOnInit(): void {
  }

  cadastrarParaOpcao(): void {
    this.router.navigate(['/opcao']);
  }

  criarCliente(): void {
    this.service.cadastrarCliente(this.cliente).subscribe(() => {
      this.service.mostrarMensagem('Cliente cadastrado com sucesso!')
      this.cliente = new Cliente();
    })


  }
}

