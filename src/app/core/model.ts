
export class GrupoSanguineo {
  id?: number;
  nome?: string;
}

export class GrupoSanguineoInput {
  id?: number;
  nome?: string;
}

export class Estoque {
  id?: number;
  data?: Date;
  status = new StatusEstoque();
  grupoSanguineo = new GrupoSanguineoInput();
}

export class StatusEstoque {
  id?: number;
  status?: string;
}

export class StatusDoador {
  statusDoadorId?: number;
  status?: string;
}

export class UsuarioInput {
  grupoSanguineoId?: number;
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
  textoEmail?: string;
  enviarEmail?: boolean;

}

export class CampanhaListagem {
  campanhaId?: number;
  campanhaNome?: string;
  dataInicialCampanha?: Date;
  dataFinalCampanha?: Date;
  grupoSanguineoNome?: string;
}

export class CampanhaUsuario {
  campanhaId?: number;
  campanhaNome?: string;
  dataInicialCampanha?: Date;
  dataFinalCampanha?: Date;
  grupoSanguineoNome?: string;
}

export class DoacaoListagem {
  id?: number;
  hora?: Date;
  nomeMae?: string;
  responsavelColeta?: string;
  nomeUsuario?: string;
}

export class Doacao {
  id?: number;
  data?: Date;
  numeroDaBolsa?: string;
  pressaoArterial?: String;
  temperatura?: String;
  hgs?: String;
  chagas?: String;
  antiHiv?: String;
  vdrl?: String;
  hcv?: String;
  hcvNat?: String;
  usuario?: String;
  tipoDoacao?: String;
  tipoDoador?: String;
  sexo?: String;
  idadeUsuario?: Number;
  grupoSanguineoId?: String;
  htlv?: String;
  antiHbc?: String;
  hbvNat?: String;
  nomeMae?: String;
  responsavelColeta?: String;
  volumeColetado?: String;
}

export class DoacaoCadastroEtapa1 {
  data?: Date;
  hora?: String;
  usuario?: String;
  tipoDoacao?: String;
  tipoDoador?: String;
  sexo?: String;
  idadeUsuario?: Number;
  grupoSanguineoId?: String;
}

export class DoacaoCadastroEtapa2 {
  numeroDaBolsa?: String;
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
  nomeMae?: String;
  responsavelColeta?: String;
  volumeColetado?: String;
  pressaoArterial?: String;
  temperatura?: String;
}

export class DoacaoCadastroEtapa4 {
  hgs?: String;
  chagas?: String;
  antiHiv?: String;
  vdrl?: String;
  hcv?: String;
  hcvNat?: String;
  observacao?: String;
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
  status = new StatusDoador();
}

export class UsuarioCadastroEtapa1 {
  nome?: string;
  email?: string;
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
  grupoSanguineoId?: string;
  permissao = new Permissao();
  escolaridade?: string;
  numero?: string;
  statusId?: string;
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
