import { MesaProvider } from './../../providers/mesas/mesas';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController,ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-mesa-editar',
  templateUrl: 'mesa-editar.html',
})
export class MesaEditarPage {
  modelo: Mesa;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private toast: ToastController, private mesaProvider: MesaProvider,
    public viewCtrl: ViewController) {
    if (this.navParams.data.mesa) {
      this.modelo = this.navParams.data.mesa;
    } else {
      this.modelo = new Mesa();
      this.modelo.estado = 0;
    }
  }
 
  salvar() {
    this.salvaMesa().then(() => {
        this.toast.create({
          message: 'Mesa salva com sucesso.',
          position: 'botton',
          duration: 3000
        }).present();
        this.navCtrl.pop();
      })
      .catch((error) => {
        this.toast.create({ 
          message: 'Erro ao salvar a mesa. Erro: ' + error.error, 
          position: 'botton', 
          duration: 3000 }).present();
      })
  }

  private salvaMesa() {
    if (this.modelo.id) {
      return this.mesaProvider.atualizar(this.modelo); 
    } else {
      return this.mesaProvider.inserir(this.modelo);
    }
  }

  fechar(){
    this.viewCtrl.dismiss();
  }

}

export class Mesa {
  id: number;
  numero: string;
  estado: number;
}
