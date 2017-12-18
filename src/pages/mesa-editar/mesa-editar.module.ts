import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MesaEditarPage } from './mesa-editar';

@NgModule({
  declarations: [
    MesaEditarPage,
  ],
  imports: [
    IonicPageModule.forChild(MesaEditarPage),
  ],
})
export class MesaEditarPageModule {}
