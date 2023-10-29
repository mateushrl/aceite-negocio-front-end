import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizacaoLancamentoComponent } from './atualizacao-lancamento.component';

describe('AtualizacaoLancamentoComponent', () => {
  let component: AtualizacaoLancamentoComponent;
  let fixture: ComponentFixture<AtualizacaoLancamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtualizacaoLancamentoComponent]
    });
    fixture = TestBed.createComponent(AtualizacaoLancamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
