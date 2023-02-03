export class GrupoSanguineo {
  grupoSanguineoId?: number;
  nome?: string;
}

export class Campanha {
  id?: number;
  nome?: string;
  dataInicial?: Date;
  dataFinal?: Date;
  grupoSanguineo = new GrupoSanguineo();
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

export class Solicitacao {
  id?: number;
  usuario = new Usuario();
  dataSolicitacao?: Date;
  apto?: boolean;
  grupoSanguineo = new GrupoSanguineo();
  status?: string;
}

export class UsuarioCadastroEtapa1 {
  nome?: string;
  cpf?: string;
  dataNascimento?: Date;
  estadoCivil?: string;
  sexo?: string;
  endereco?: string;
  cidade?: string;
}

export class UsuarioCadastroEtapa2 {
  numeroDoacoesPrevias?: number;
  profissao?: string;
  bairro?: string;
  cep?: string;
  estado?: string;
  escolaridade?: string;
  cor?: string;
  nacionalidade?: string;
}

export class UsuarioCadastroEtapa3 {
  grupoSanguineoId?: number
}


