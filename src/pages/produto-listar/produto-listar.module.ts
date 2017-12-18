import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProdutoListarPage } from './produto-listar';

@NgModule({
  declarations: [
    ProdutoListarPage,
  ],
  imports: [
    IonicPageModule.forChild(ProdutoListarPage),
  ],
  exports: [
    ProdutoListarPage
  ]
})
export class ProdutoListarPageModule {}
