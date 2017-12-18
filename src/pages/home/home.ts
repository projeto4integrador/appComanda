import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

import { CategoriaListarPage } from '../../pages/categoria-listar/categoria-listar';
import { ProdutosProvider } from '../../providers/produtos/produtos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [Http]
})
export class HomePage {

  items: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private produtosProvider: ProdutosProvider) { }


ionViewDidLoad() {
    this.produtosProvider.getAll().then(data => this.items = data);
  }

  CategoriaTap($event, categoria) {
    this.navCtrl.push(CategoriaListarPage, {
        id:2,
        descricao: 'Refeições'
    });
  }

  CategoriaTap_2($event, categoria) {
    this.navCtrl.push(CategoriaListarPage, {
      id:3,
      descricao: 'Doces e Sobremesas'
    });
  }

  CategoriaTap_3($event, categoria) {
    this.navCtrl.push(CategoriaListarPage, {
      id:7,
      descricao:'Cervejas'
    });
  }

}
