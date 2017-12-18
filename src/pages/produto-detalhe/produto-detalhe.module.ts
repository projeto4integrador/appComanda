import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProdutoDetalhePage } from './produto-detalhe';

@NgModule({
  declarations: [
    ProdutoDetalhePage,
  ],
  imports: [
    IonicPageModule.forChild(ProdutoDetalhePage),
  ],
  exports: [
    ProdutoDetalhePage
  ]
})
export class ProdutoDetalhePageModule {}