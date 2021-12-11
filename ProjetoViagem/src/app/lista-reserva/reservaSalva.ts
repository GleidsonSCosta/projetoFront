import { Estados } from './listaestados';
import { Cliente } from './../cliente/cliente';

export class ReservaSalva{
    id!: number;
    cliente!: Cliente;
    origem!: Estados;
    destino!: Estados;
    dataViagem!: string;
}