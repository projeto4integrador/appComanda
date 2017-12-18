import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

import { ProdutosProvider } from '../../providers/produtos/produtos';

@IonicPage()
@Component({
  selector: 'page-produto-detalhe',
  templateUrl: 'produto-detalhe.html'
})
export class ProdutoDetalhePage {
  
  items: any;
  adicionais: any;


  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController,
               public produtosProvider:ProdutosProvider) {

    this.items = this.navParams.get('items');
    this.adicionais = this.navParams.get('adicionais');
    console.log(this.items.adicional);
  }

  fechar(){
    this.viewCtrl.dismiss();
  }

  addCarrinho($event,item) {
    console.log("Metodo addCarrinho => "+item);
    
    this.produtosProvider.get(item.id)
      .then((result: any) => {
        this.navCtrl.push('CarrinhoPage', {items:item, adicionais: item.adicional });
      })
  }

}