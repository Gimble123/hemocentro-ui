export class Campanha {
  id?: number;
  nome?: string;
  dataInicial?: Date;
  dataFinal?: Date;
  grupoSanguineo = new GrupoSanguineo();
}

export class GrupoSanguineo {
  id?: number;
  nome?: string;
}

export class Doacao {
  id?: number;
}

export class Usuario {
	id?: number;
	login?: string;
	senha?: string;
  nome?: string;
  grupoSanguineo = new GrupoSanguineo();
  cpf?: string;
  logradouro?: string;
  numero?: string;
  complemento?: string;
  bairro?: string;
  cep?: string;
  cidade?: string;
  estado?: string;
  dataNascimento?: Date;
  profissao?: string;
  sexo?: string;
  cor?: string;
  escolaridade?: string;
  estadoCivil?: string;
  nacionalidade?: string;
  numeroDoacoes?: number;
}

export class UsuarioCadastroEtapa1 {
  nome?: string;
  cpf?: string;
  dataNascimento?: Date;
  estadoCivil?: string;
  numeroDoacoes?: number;
  login?: string;
  profissao?: string;
  sexo?: string;
  logradouro?: string;
  cidade?: string;
  nacionalidade?: string;
}

export class UsuarioCadastroEtapa2 {
  nome?: string;
  cpf?: string;
  dataNascimento?: Date;
  estadoCivil?: string;
  numeroDoacoes?: number;
  login?: string;
  profissao?: string;
  sexo?: string;
  logradouro?: string;
  cidade?: string;
  nacionalidade?: string;
}

