import { Role } from "./Role";

export class Usuario{
    id: number;
    usuario: string;
    cnpj: string;
    telefone: number;
    email: string;
    endereco: string;
    cidade: string;
    estado: string;
    senha: string;
    saldo: number;
    status: String;
    role: Role;
}