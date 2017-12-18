import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CarrinhoProvider {

  constructor(public http: Http) {
    
  }

quantidadeMaximo(quantidade){
  quantidade += 1;
}

quantidadeMinimo(quantidade){
  quantidade -= 1;
}

getTotal(): number{
    var amount = 0;
    return amount;
}

}
