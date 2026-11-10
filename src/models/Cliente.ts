export class Cliente {
  id: number;
  nome: string;
  cpf: string;
  rg: string;
  anoNascimento: number;
  idade: number;

  constructor(id: number, nome: string, cpf: string, rg: string, anoNascimento: number) {
    this.id = id;
    this.nome = nome;
    this.cpf = cpf;
    this.rg = rg;
    this.anoNascimento = anoNascimento;
    this.idade = 2026 - anoNascimento; 
  }
}