import { MesaProvider } from './../../providers/mesas/mesas';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, InfiniteScroll } from 'ionic-angular';
import { ViewChild } from '@angular/core';

@IonicPage()
@Component({
  selector: 'page-mesa-listar',
  templateUrl: 'mesa-listar.html',
})
export class MesaListarPage {
  mesas: any[];

  @ViewChild(InfiniteScroll) infiniteScroll: InfiniteScroll;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private toast: ToastController, 
              private mesaProvider: MesaProvider) { }

  ionViewDidEnter() {
    this.mesas = [];
    this.infiniteScroll.enable(true);
    this.getAllMesas();
  }

  getAllMesas() {
    this.mesaProvider.getAll()
      .then((result: any) => {
        for (var i = 0; i < result.length; i++) {
          var mesa = result[i];
          this.mesas.push(mesa);
        }

        if (this.infiniteScroll) {
          this.infiniteScroll.complete();
          if (this.mesas.length == result.length) {
            this.infiniteScroll.enable(false);
          }
        }
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao listar as mesas. Erro: ' + error.error, 
                            position: 'botton', 
                            duration: 3000 }).present();
      });
  }

  getMesas() {
    setTimeout(() => {
      this.getAllMesas();
    }, 500);
  }

  openMesa(openMesa) {
    this.mesaProvider.get(openMesa.id)
      .then((result: any) => {
        this.navCtrl.push('MesaDetalhePage', { mesa: result });
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao recuperar dados da mesa. Erro: ' + error.error, 
                            position: 'botton', 
                            duration: 3000 }).present();
      });

  }

  openCriaMesa() {
    this.navCtrl.push('MesaEditarPage');
  }

  openEditaMesa(id: number) {
    this.mesaProvider.get(id)
      .then((result: any) => {
        this.navCtrl.push('MesaEditarPage', { mesa: result });
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao recuperar a mesa. Erro: ' + error.error, 
                            position: 'botton', 
                            duration: 3000 }).present();
      });
  }

  deletaMesa(mesa: any) {
    this.mesaProvider.remover(mesa.id)
      .then((result: any) => {
        let index = this.mesas.indexOf(mesa);
        this.mesas.splice(index, 1);

        this.toast.create({ message: 'Mesa excluído com sucesso.', 
                            position: 'botton', 
                            duration: 3000 }).present();
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao excluir o Mesa. Erro: ' + error.error, 
                            position: 'botton', 
                            duration: 3000 }).present();
      });
  }


  stepPedidoMesa(id: number) {
    this.mesaProvider.get(id)
      .then((result: any) => {
        this.navCtrl.push('MesaDetalhePage', { mesa: result });
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao recuperar dados da mesa. Erro: ' + error.error, 
                            position: 'botton', 
                            duration: 3000 }).present();
      });

  }  


}
