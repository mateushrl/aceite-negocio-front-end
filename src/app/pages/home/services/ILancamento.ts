export interface ILancamento{
    id: number,
    descricao: string
}

export interface ILancamento {
    id: number;
    descricao: string;
    data: string;
    valor: number;
    status: EStatus;
    avulso: boolean;
  }
  
  export enum EStatus {
    Valido = 1,
    Cancelado = 2,
  }