import { Usuario } from "./Usuario";

export class Alimento {
    id: number;
    name: string;
    quantity: number;
    price: number;
    dataCadastro: Date;
    dataValidade: Date;
    status: boolean;
    usuario: Usuario;

}
