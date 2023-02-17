export class GrupoSanguineo {
  grupoSanguineoId?: number;
  nome?: string;
}

export class GrupoSanguineoInput {
  id?: number;
  nome?: string;
}

export class UsuarioInput {
  grupoSanguineo = new GrupoSanguineoInput();
  login?: string;
	senha?: string;
  nome?: string;
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
  telefone?: string;
  escolaridade?: string;
  estadoCivil?: string;
  nacionalidade?: string;
  numeroDoacoes?: number;
}

export class Campanha {
  id?: number;
  nome?: string;
  dataInicial?: Date;
  dataFinal?: Date;
  grupoSanguineo = new GrupoSanguineo();
}

export class CampanhaUsuario {
  campanhaId?: number;
  campanhaNome?: string;
  dataInicialCampanha?: Date;
  dataFinalCampanha?: Date;
  grupoSanguineoNome?: string;
}

export class Doacao {
  id?: number;
}

export class UpdatePasswordInput {
  usuarioEmail?: String;
  novaSenha?: String;
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
  telefone?: string;
  escolaridade?: string;
  estadoCivil?: string;
  nacionalidade?: string;
  numeroDoacoes?: number;
  permissao = new Permissao();
}


export class Agendamento {
  agendamentoId?: number;
  status?: string;
  dataAgendamento?: Date;
}

export class Solicitacao {
  solicitacaoId?: number;
  nomeUsuario?: String;
  dataSolicitacao?: Date;
  grupoSanguineo?: String;
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
  permissao = new Permissao();
}

export class Permissao {
  id?: number;
  descricao?: string;
}


