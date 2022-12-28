export class GrupoSanguineo {
  id?: number;
  nome?: string;
}

export class Campanha {
  id?: number;
  nome?: string;
  dataInicial?: Date;
  dataFinal?: Date;
  quantidadeDoadores?: number;
  grupoSanguineo = new GrupoSanguineo();
}
