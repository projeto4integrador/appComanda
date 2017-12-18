import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MesaProvider {
  private API_URL

  constructor(public http: Http) { }

  criarUsuario(email: string, senha: string) {
    return new Promise((resolve, reject) => {
      var data = {
        email: email,
        password: senha
      };

      this.http.post(this.API_URL + 'registrar', data)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }

  login(email: string, senha: string) {
    return new Promise((resolve, reject) => {
      var data = {
        email: email,
        password: senha
      };

      this.http.post(this.API_URL + 'login', data)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }

  getAll() {
    return new Promise((resolve, reject) => {
      let url = 'mesa/';
      this.http.get(url)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }

  get(id: number) {
    return new Promise((resolve, reject) => {
      let url = 'mesa/' + id;
      console.log(url);
      this.http.get(url)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }

  inserir(mesa: any) {
    return new Promise((resolve, reject) => {
      let url = 'mesa/';

      this.http.post(url, mesa)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }

  atualizar(mesa: any) {
    return new Promise((resolve, reject) => {
      let url = 'mesa/' + mesa.id;
      let data = {
        "numero": mesa.numero,
        "estado": mesa.estado
      }

      this.http.put(url, data)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }

  remover(id: number) {
    return new Promise((resolve, reject) => {
      let url = 'mesa/' + id;

      this.http.delete(url)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }
}