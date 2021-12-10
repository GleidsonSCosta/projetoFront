import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opcao',
  templateUrl: './opcao.component.html',
  styleUrls: ['./opcao.component.css']
})
export class OpcaoComponent implements OnInit {

  constructor(private router: Router) { }

  opcaoParaCadastrar(): void {
    this.router.navigate(['/cadastrar']);
  }
  opcaoParaConsultar(): void {
    this.router.navigate(['/consultar']);
  }
  opcaoParaReserva(): void {
    this.router.navigate(['/reserva']);
  }

  ngOnInit(): void {
  }

}
