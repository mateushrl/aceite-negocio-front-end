import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LancamentoService } from '../home/lancamento.service';
import { ILancamento } from 'src/app/models/lancamento';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-atualizacao-lancamento',
  templateUrl: './atualizacao-lancamento.component.html',
  styleUrls: ['./atualizacao-lancamento.component.css']
})
export class AtualizacaoLancamentoComponent {
  lancamento!: ILancamento; 

   constructor(
   public dialogRef: MatDialogRef<AtualizacaoLancamentoComponent>, ) {
    //@Inject(MAT_DIALOG_DATA) public data: any
   //this.lancamento = data.lancamento; 
 }

  onSaveClick(): void {
    this.dialogRef.close(this.lancamento); 
  }

  onCancelClick(): void {
    this.dialogRef.close(); 
  }
}
