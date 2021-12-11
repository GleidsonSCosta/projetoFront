import { ClientesService } from './clientes.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { OpcaoComponent } from './opcao/opcao.component';
import { LoginComponent } from './login/login.component';
import { ReservaComponent } from './reserva/reserva.component';
import { ConsultarComponent } from './consultar/consultar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import{ FormsModule } from '@angular/forms';
import { ListaReservaComponent } from './lista-reserva/lista-reserva.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastrarComponent,
    OpcaoComponent,
    LoginComponent,
    ReservaComponent,
    ConsultarComponent,
    ListaReservaComponent
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
