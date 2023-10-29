import { Component, OnInit } from '@angular/core';
import { LancamentoService } from './lancamento.service';
import { EStatus, ILancamento } from '../../models/lancamento';
import { FormControl, FormGroup } from '@angular/forms';
import { format } from 'date-fns';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AtualizacaoLancamentoComponent } from '../atualizacao-lancamento/atualizacao-lancamento.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(public lancamentoService: LancamentoService, private router: Router, private dialog: MatDialog) {
  }

  displayedColumns: string[] = ['id', 'descricao', 'valor', 'status', 'avulso', 'data', 'editar', 'cancelar'];

  lancamento = {} as ILancamento;
  lancamentos: ILancamento[] = [];
  valorTotal: number = 0;

  today = new Date();
  month = this.today.getMonth();
  year = this.today.getFullYear();

  campaignOne = new FormGroup({
    start: new FormControl(new Date(this.year, this.month, 13)),
    end: new FormControl(new Date(this.year, this.month, 16)),
  });
  campaignTwo = new FormGroup({
    start: new FormControl(new Date(this.year, this.month, 15)),
    end: new FormControl(new Date(this.year, this.month, 19)),
  });

  async ngOnInit() {
    await this.obterLancamentos();
  }

  async obterLancamentos() {
    try {
      const lancamentos = await this.lancamentoService.obterLancamentos().toPromise();
      if (lancamentos) {
        this.lancamentos = lancamentos as ILancamento[];
        this.valorTotal = this.lancamentos.reduce((total, lancamento) => total + lancamento.valor, 0);
      } else {
        console.error('Nenhum lançamento retornado da API.');
      }
    } catch (error) {
      console.error('Erro ao obter lançamentos:', error);
    }
  }

  async aplicarFiltroData() {
    if (this.campaignOne != null && this.campaignOne != null) {
      const dataInicial = this.campaignOne.get('start')?.value;
      const dataFinal = this.campaignOne.get('end')?.value;

      if (dataInicial != null && dataFinal != null) {
        const formattedDataInicial = this.formatDate(dataInicial);
        const formattedDataFinal = this.formatDate(dataFinal);

        this.lancamentoService.obterLancamentosFiltrados(dataInicial, dataFinal).subscribe((lancamentos) => {
          this.lancamentos = lancamentos;
          this.valorTotal = this.lancamentos.reduce((total, lancamento) => total + lancamento.valor, 0);
        });
      }
    }
  }

  formatDate(date: Date): string {

    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();

    return `${month}-${day}-${year}`;
  }

  editarLancamento(lancamento: ILancamento) {
    // const dialogRef = this.dialog.open(AtualizacaoLancamentoComponent, {
    //   width: '250px',
    //   data: { lancamento: lancamento }
    // });
  
    // dialogRef.afterClosed().subscribe(result => {
    //   if (result) {
    //     this.lancamentoService.editarLancamento(result).subscribe(() => {
         
    //     });
    //   }
    // });
  }


  criaLancamento(lancamento: ILancamento) {
  }
  limparFormulario(lancamento: ILancamento) {

  }
  abrirPaginaAdicionarLancamento() {
    this.router.navigate(['/adicionar-lancamento']);
  }

  cancelarLancamento(lancamento: ILancamento) {
    if (lancamento.status == EStatus.Valido) {
      this.lancamentoService.cancelaLancamento(lancamento.id);

      const elementoParaAtualizar = this.lancamentos.find(item => item.id === lancamento.id);

      if (elementoParaAtualizar) {
        elementoParaAtualizar.status = EStatus.Cancelado;
      }
    }
  }

}
