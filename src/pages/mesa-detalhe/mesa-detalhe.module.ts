import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MesaDetalhePage } from './mesa-detalhe';

@NgModule({
  declarations: [
    MesaDetalhePage,
  ],
  imports: [
    IonicPageModule.forChild(MesaDetalhePage),
  ],
  exports: [
    MesaDetalhePage
  ]
})
export class MesaDetalhePageModule {}
