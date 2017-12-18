import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MesaListarPage } from './mesa-listar';

@NgModule({
  declarations: [
    MesaListarPage,
  ],
  imports: [
    IonicPageModule.forChild(MesaListarPage),
  ],
})
export class MesaListarPageModule {}
