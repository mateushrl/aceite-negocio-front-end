import { Component } from '@angular/core';
import { EStatus, ILancamento } from 'src/app/models/lancamento';
import { LancamentoService } from '../home/lancamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adicionar-lancamento-component',
  templateUrl: './adicionar-lancamento.component.html',
  styleUrls: ['./adicionar-lancamento.component.css']
})
export class AdicionarLancamentoComponent {
  constructor(public lancamentoService: LancamentoService, private router: Router) {
  }

  lancamento = {} as ILancamento;

  criaLancamento() {
    this.lancamento.avulso = false;
    this.lancamento.status = EStatus.Valido;
    const data = new Date(this.lancamento.data);
    this.lancamento.data = data;

    this.lancamentoService.criarLancamento(this.lancamento);

    this.router.navigate(['/home']);
  }
}