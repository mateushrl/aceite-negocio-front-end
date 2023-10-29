import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { API_PATH } from 'src/app/environments/environment';
import { ILancamento } from '../../models/lancamento';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})

export class LancamentoService {

  constructor(private httpClient: HttpClient) { }

  url = `${API_PATH}`;

  obterLancamentos(): Observable<ILancamento[]> {
    return this.httpClient.get<ILancamento[]>(this.url+"Lancamentos/ObtemLancamentos")
      .pipe()
  }
  obterLancamentosFiltrados(dataInicio: Date, dataFim: Date): Observable<ILancamento[]> {
    const params = new HttpParams()
      .set('dataInicio', dataInicio.toISOString())
      .set('dataFim', dataFim.toISOString());

    return this.httpClient.get<ILancamento[]>(`${this.url}Lancamentos/ObtemLancamentosFiltrados`, { params });
  }

  async criarLancamento(lancamento: ILancamento): Promise<Observable<ILancamento>> {
    const lancamentoJSON = JSON.stringify(lancamento); 
    return await this.httpClient.post<ILancamento>(`${this.url}Lancamentos/CriaLancamento`, lancamentoJSON, {
      headers: { 'Content-Type': 'application/json' }
    });  
  }

cancelaLancamento(idLancamento: number){
  const params = new HttpParams()
  .set('idLancamento', idLancamento);
  console.log(`${this.url}Lancamentos/CancelaLancamento`, { params })
  return this.httpClient.get<ILancamento[]>(`${this.url}Lancamentos/CancelaLancamento`, { params })
}

editarLancamento(lancamento: ILancamento) {
  const lancamentoJSON = JSON.stringify(lancamento); 
  return this.httpClient.post<ILancamento>(`${this.url}Lancamentos/AtualizaLancamento`, lancamentoJSON, {
    headers: { 'Content-Type': 'application/json' }
  });  
}

}
