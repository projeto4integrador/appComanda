import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PagamentoDetalhePage } from './pagamento-detalhe';

@NgModule({
  declarations: [
    PagamentoDetalhePage,
  ],
  imports: [
    IonicPageModule.forChild(PagamentoDetalhePage),
  ],
  exports: [
    PagamentoDetalhePage
  ]
})
export class PagamentoDetalhePageModule {}
