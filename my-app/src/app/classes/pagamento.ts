import { Usuario } from "./Usuario";

export class Pagamento {
    id: number; 
    quantia: number;
    formaPagamento: String;
    date: Date;
    usuario: Usuario;
}