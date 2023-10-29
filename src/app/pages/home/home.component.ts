import { Component, OnInit } from '@angular/core';
import { LancamentoService } from './lancamento.service';
import { ILancamento } from './services/ILancamento';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  displayedColumns: string[] = ['id', 'descricao', 'valor']; 

  lancamento = {} as ILancamento;
  lancamentos: ILancamento[] = [];

constructor(public lancamentoService: LancamentoService){}
  
ngOnInit(): void {
    this.obterLancamentos();
  }

obterLancamentos(){

  this.lancamentoService.obterLancamentos().subscribe((lancamentos: ILancamento[]) => {
    this.lancamentos = lancamentos;
  });
}
}
