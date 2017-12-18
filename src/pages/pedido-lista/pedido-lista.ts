import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@IonicPage()
@Component({
  selector: 'page-pedido-lista',
  templateUrl: 'pedido-lista.html',
})
export class PedidoListaPage {
	items: any; // A variavel items repeosenta a mesa :: Porque eu não mudo o nome ?
  pedidos:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private http: Http) {

  	this.items = this.navParams.get('items')
    this.pedidos = this.navParams.get('pedidos')
    console.log("Mesa => "+this.items)
    console.log("Pedido => "+this.pedidos)
  }

toggleSection(i) {
    this.pedidos[i].open = !this.pedidos[i].open;
  }
 
  toggleItem(i, j) {
    
    this.pedidos[i].itens[j].open = !this.pedidos[i].itens[j].open;
  }

  toggleItemProduto(i, j, k){
    this.pedidos[i].itens[j].produto.adicional[k].open = !this.pedidos[i].itens[j].produto.adicional[k].open;
  }

  hack(val) {
    console.log("Resultado dos itens => "+val);
    return Array.from(val);
    
  }

   somaQtdItem(qtd,vlr){
     var total = qtd*vlr;
    return 'R$: '+ Math.round(total * 10) / 10;
  }

finalizarMesa(i){
 this.navCtrl.push('PagamentoDetalhePage',{pedido:this.pedidos[i]});
}

}
