import { ClientesService } from './clientes.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { OpcaoComponent } from './opcao/opcao.component';
import { ReservaComponent } from './reserva/reserva.component';
import { ConsultarComponent } from './consultar/consultar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import{ FormsModule } from '@angular/forms';
import { ListaReservaComponent } from './lista-reserva/lista-reserva.component';
import { ListaClienteComponent } from './lista-reserva/lista-cliente/lista-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastrarComponent,
    OpcaoComponent,
    ReservaComponent,
    ConsultarComponent,
    ListaReservaComponent,
    ListaClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [
    ClientesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
