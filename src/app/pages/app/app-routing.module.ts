import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarLancamentoComponent } from '../adicionar-lancamento-component/adicionar-lancamento.component';
import { HomeComponent } from '../home/home.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent }, 
  { path: 'adicionar-lancamento', component: AdicionarLancamentoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
