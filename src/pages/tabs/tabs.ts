import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { PedidoPage } from '../pedido/pedido';
import { MesaListarPage} from '../mesa-listar/mesa-listar';
import { BarcodeScannerPage} from '../barcode-scanner/barcode-scanner';

import { CategoriaListarPage } from '../categoria-listar/categoria-listar';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CategoriaListarPage;
  tab3Root = PedidoPage;
  tab4Root = MesaListarPage;
  tab5Root = BarcodeScannerPage;

  constructor() {

  }
}
