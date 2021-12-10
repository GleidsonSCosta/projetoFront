import { LoginComponent } from './login/login.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ConsultarComponent } from './consultar/consultar.component';
import { OpcaoComponent } from './opcao/opcao.component';
import { ReservaComponent } from './reserva/reserva.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:"", component: LoginComponent},
  { path:"cadastrar", component: CadastrarComponent},
  { path: "consultar", component: ConsultarComponent},
  { path: "opcao", component: OpcaoComponent},
  { path: "reserva", component: ReservaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }