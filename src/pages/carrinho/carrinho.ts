import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';

import { PedidoListaPage } from '../pedido-lista/pedido-lista'
import {CarrinhoProvider } from '../../providers/carrinho/carrinho';

@IonicPage()
@Component({
  selector: 'page-carrinho',
  templateUrl: 'carrinho.html',
})
export class CarrinhoPage {

  items: any;
  adicionais: any;
  quantidade:number;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public cartService:CarrinhoProvider,public alertCtrl: AlertController,) {
    this.items = this.navParams.get('items');
    this.adicionais = this.navParams.get('adicionais');
    this.items.quantidade = 1;
  }

  ionViewDidLoad() {}


  incQuantidade(qte) {
  	return this.items.quantidade++;
  }

  decQuantidade(qte) {
    if(this.items.quantidade === 1){
      let alert = this.alertCtrl.create({
        title: 'Oops',
        subTitle: 'Não é permitido 0 na quantidade!',
        buttons: ['Ok']
      });
      alert.present();
      return 0
    }
  	return this.items.quantidade--;
  }

somaQtdItem(qtd,vlr){
    var total = qtd*vlr;
   return 'R$ '+ Math.round(total * 10) / 10;
 }

 criarPedido(){
  this.navCtrl.push(PedidoListaPage);
 }

}
