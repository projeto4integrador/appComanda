import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';


import { ProdutoDetalhePage } from '../../pages/produto-detalhe/produto-detalhe';

import { ProdutosProvider } from '../../providers/produtos/produtos';

@Component({
  selector: 'page-produto-listar',
  templateUrl: 'produto-listar.html',
  providers: [Http]
})

export class ProdutoListarPage {

  items: any;
  produtos: any;

  constructor(public navCtrl: NavController,public params:NavParams,
              private produtosProvider: ProdutosProvider,public loadingController: LoadingController){
            
            this.produtos = this.params.get('produtos');
            console.log(this.produtos)
  }
/*
  ionViewDidLoad() {

    let loader = this.loadingController.create({
      content: "Carregando produtos"
    });
    loader.present();

    this.produtosProvider.getAll().then(data => {
        loader.dismiss();
        this.items = data
    });
  
  }
*/
  getItems(searchbar) {
    var q = searchbar.srcElement.value;
    if (!q) {
      let loader = this.loadingController.create({
        content: "Procurando itens."
      });
      loader.present();

      this.produtosProvider.getAll().then(data => {
        loader.dismiss();
        this.items = data
      });
    }

    this.items = this.items.filter((v) => {
      if(v.title && q) {
        if (v.title.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });
  }

  itemTapped($event, item) {
    this.navCtrl.push(ProdutoDetalhePage, item);
  }

  openProdutosDetalhe($event,item) {
    console.log("Produto : "+item)
    this.produtosProvider.get(item.id)
      .then((result: any) => {
        this.navCtrl.push('ProdutoDetalhePage', {items:item, adicionais: item.adicional });
      })
  }

}