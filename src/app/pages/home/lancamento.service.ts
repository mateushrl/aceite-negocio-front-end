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
}
