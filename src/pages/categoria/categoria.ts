import { CategoriasProvider } from './../../providers/categorias/categorias';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, InfiniteScroll } from 'ionic-angular';
import { ViewChild } from '@angular/core';

@IonicPage()
@Component({
  selector: 'page-categoria',
  templateUrl: 'categoria.html',
})
export class CategoriaPage {
  mesas: any[];

  @ViewChild(InfiniteScroll) infiniteScroll: InfiniteScroll;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private toast: ToastController,
    private categoriasProvider: CategoriasProvider) { }

  ionViewDidEnter() {
    this.mesas = [];
    this.infiniteScroll.enable(true);
    this.getAllMesas();
  }

  getAllMesas() {
    this.categoriasProvider.getAll()
      .then((result: any) => {
        for (var i = 0; i < result.length; i++) {
          var mesa = result[i];
          this.mesas.push(mesa);
        }

        if (this.infiniteScroll) {
          this.infiniteScroll.complete();
          if (this.mesas.length == result.length) {
            console.log('Total de Linhas Retornadas : ' + result.length);
            this.infiniteScroll.enable(false);
          }
        }
      })
      .catch((error: any) => {
        this.toast.create({
          message: 'Erro ao listar as categorias. Erro: ' + error.error,
          position: 'botton',
          duration: 3000
        }).present();
      });
  }

  getMesas() {
    setTimeout(() => {
      this.getAllMesas();
    }, 500);
  }
}
