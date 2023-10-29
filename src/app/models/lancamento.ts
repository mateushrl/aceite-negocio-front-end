import { EStatus } from "./status";

export interface ILancamento {
    id: number;
    descricao: string;
    data: Date;
    valor: number;
    status: EStatus;
    avulso: boolean;
  }
  
export { EStatus };

