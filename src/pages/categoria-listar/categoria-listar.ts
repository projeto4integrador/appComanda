import { CategoriasProvider } from './../../providers/categorias/categorias';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController,InfiniteScroll } from 'ionic-angular';
import { ViewChild } from '@angular/core';

import { ProdutosProvider } from '../../providers/produtos/produtos';
import { ProdutoListarPage } from '../../pages/produto-listar/produto-listar';
import { isUndefined } from 'ionic-angular/util/util';

@IonicPage()
@Component({
  selector: 'page-categoria-listar',
  templateUrl: 'categoria-listar.html',
})
export class CategoriaListarPage {

  categorias: any;
  produtos :{};
  categoriaUnica: {};

  @ViewChild(InfiniteScroll) infiniteScroll: InfiniteScroll;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private categoriasProvider: CategoriasProvider,private toast: ToastController, 
    private produtosProvider:ProdutosProvider) {
      
      this.categoriaUnica = navParams.get('id');

  }

  ionViewDidEnter() {
    this.categorias = [];
    this.infiniteScroll.enable(true);
    if (isUndefined(this.categoriaUnica)) {
      this.getAllCategorias();
    } else {
      this.getCategoriaPorId();
    }
  }


  getAllCategorias() {
    this.categoriasProvider.getAll()
      .then((result: any) => {
        for (var i = 0; i < result.length; i++) {
          var mesa = result[i];
          this.categorias.push(mesa);
        }
        if (this.infiniteScroll) {
          this.infiniteScroll.complete();
          if (this.categorias.length == result.length) {
            this.infiniteScroll.enable(false);
          }
        }
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao listar as categorias. Erro: ' + error.error, 
                            position: 'botton', 
                            duration: 3000 }).present();
      });
  }

  getMesas() {
    setTimeout(() => {
      this.getAllCategorias();
    }, 500);
  }

  getCategoriaPorId(){
    this.categoriasProvider.get(Number(this.categoriaUnica))
    .then((result: any) => {
      this.categorias.push(result);
    })
    .catch((error: any) => {
      this.toast.create({ message: 'Erro ao recuperar dados da produto. Erro: ' + error.error, 
                          position: 'botton', 
                          duration: 3000 }).present();
    });
  };

  openProdutos(categoria) {
    this.categoriasProvider.get(categoria.id)
      .then((result: any) => {
        this.navCtrl.push(ProdutoListarPage, { produtos: categoria.produto });
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao recuperar dados da produto. Erro: ' + error.error, 
                            position: 'botton', 
                            duration: 3000 }).present();
      });
  }

}