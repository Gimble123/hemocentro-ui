export class GrupoSanguineo {
  grupoSanguineoId?: number;
  nome?: string;
}

export class GrupoSanguineoInput {
  id?: number;
  nome?: string;
}

export class Estoque {
  id?: number;
  descricao?: string;
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
  grupoSanguineo = new GrupoSanguineoInput();
}

export class CampanhaUsuario {
  campanhaId?: number;
  campanhaNome?: string;
  dataInicialCampanha?: Date;
  dataFinalCampanha?: Date;
  grupoSanguineoNome?: string;
}

export class DoacaoCadastroEtapa1 {
  numeroDaBolsa?: String;
  hora?: String;
  pulso?: String;
  hematocrito?: String;
  volumeASerColetado?: String;
  hbsAg?: String;
  numeroDoNat?: String;
  peso?: number;
}

export class DoacaoCadastroEtapa2 {
  pressaoArterial?: String;
  temperatura?: String;
  hgs?: String;
  chagas?: String;
  antiHiv?: String;
  vdrl?: String;
  hcv?: String;
  hcvNat?: String;
}

export class DoacaoCadastroEtapa3 {
  htlv?: String;
  antiHbc?: String;
  hbvNat?: String;
  nomePai?: String;
  responsavelColeta?: String;
  usuario?: String;
  volumeColetado?: String;
}

export class DoacaoCadastroEtapa4 {
  observacao?: String;
}

export class Doacao {
  doacaoId?: number;
  hora?: Date;
  nomePai?: string;
  responsavelColeta?: string;
  nomeUsuario?: string;
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

export class AgendamentoInput {
  agendamentoId?: number;
  dataAgendamento?: Date;
  usuarioId?: number;
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
  logradouro?: string;
  cidade?: string;
  telefone?: string;
}

export class UsuarioCadastroEtapa2 {
  numeroDoacoesPrevias?: number;
  profissao?: string;
  bairro?: string;
  cep?: string;
  estado?: string;
  cidade?: string;
  cor?: string;
  nacionalidade?: string;
}

export class UsuarioCadastroEtapa3 {
  grupoSanguineo = new GrupoSanguineoInput();
  permissao = new Permissao();
  escolaridade?: string;
  numero?: string;
}

export class Permissao {
  id?: number;
  descricao?: string;
}

export class UsuarioFormStep1 {
  nome?: string;
  email?: string;
  dataNascimento?: Date;
  grupoSanguineoId?: number;
  cpf?: string;
  telefone?: string;
}

export class UsuarioFormStep2 {
  nacionalidade?: string;
  sexo?: string;
  estadoCivil?: string;
  cidade?: string;
  logradouro?: string;
  numero?: string;
}

export class UsuarioFormStep3 {
  profissao?: string;
  numeroDoacoesPrevias?: number;
  bairro?: string;
  cep?: string;
  estado?: string;
  escolaridade?: string;
  cor?: string;
}


