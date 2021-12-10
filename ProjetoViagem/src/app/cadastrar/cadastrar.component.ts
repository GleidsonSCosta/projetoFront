import { ClientesService } from './../clientes.service';
import { CadastrarServiceService } from './cadastrar-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from './cliente';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  cliente: Cliente;
  // cliente: Cliente = {
  //   nome:'',
  //   email:'',
  //   cpf:'',
  //   telefone:'',
  //   endereco:'' ,
  // }

  constructor(private router:Router, private cadastrarService:CadastrarServiceService, private service: ClientesService) {
    this.cliente = new Cliente();
  }

  ngOnInit(): void { 
  }

  cadastrarParaOpcao(): void {
    this.router.navigate(['/opcao']);
  }

  criarCliente(): void {
    this.cadastrarService.cadastrarCliente(this.cliente).subscribe(() => {
       this.cadastrarService.mostrarMensagem('cliente criado!')
       this.router.navigate(['/cadastrar'])
    })

  
}
}

