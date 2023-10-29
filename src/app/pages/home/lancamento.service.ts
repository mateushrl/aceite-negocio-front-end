import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { API_PATH } from 'src/app/environments/environment';
import { ILancamento } from './services/ILancamento';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})

export class LancamentoService {

  constructor(private httpClient: HttpClient) {}

url = `${API_PATH}Lancamentos/ObtemLancamentos`
  obterLancamentos(): Observable<ILancamento[]> {
    return this.httpClient.get<ILancamento[]>(this.url)
      .pipe()
  }
}
