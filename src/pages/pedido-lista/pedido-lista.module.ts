import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PedidoListaPage } from './pedido-lista';

@NgModule({
  declarations: [
    PedidoListaPage,
  ],
  imports: [
    IonicPageModule.forChild(PedidoListaPage),
  ],
  exports: [
    PedidoListaPage
  ]
})
export class PedidoListaPageModule {}
