import { Component } from '@angular/core';
import { ILancamento } from 'src/app/models/lancamento';

@Component({
  selector: 'app-adicionar-lancamento-component',
  templateUrl: './adicionar-lancamento.component.html',
  styleUrls: ['./adicionar-lancamento.component.css']
})
export class AdicionarLancamentoComponent {
  
  lancamento = {} as ILancamento;


  criaLancamento(lancamento: ILancamento){
  }
}
