import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//import { Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginProvider {

  constructor(public http: Http) {
    
  }

 login(usuario: string, senha: string){
  return new Promise((resolve, reject) => {
    var data = {
      usuario: usuario,
      senha: senha
    };
    let url = 'usuario/';
    this.http.get(url+1)
    .subscribe((result: any) => {
      resolve(result.json());
    },
    (error) => {
      reject(error.json());
    });
});
 }

}
