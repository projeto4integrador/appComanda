import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-pagamento-detalhe',
  templateUrl: 'pagamento-detalhe.html',
})
export class PagamentoDetalhePage {
  
  correnteStep: string = "pagamento";
  pedido:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      
    this.pedido = this.navParams.get('pedido');
    console.log('PagamentoDetalhePage=> '+this.pedido.valor);
    
  }

somaQtdItem(qtd,vlr){
    var total = qtd*vlr;
   return 'R$: '+ Math.round(total * 10) / 10;
 }

 getCartTotal() {
    return this.pedido.valor;
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagamentoDetalhePage');

  }

  paymentCreditCard(){
   	 console.log('Integração do pagamento');
   }

   completeCheckout(){
    console.log('Finaliza');
   }

}
