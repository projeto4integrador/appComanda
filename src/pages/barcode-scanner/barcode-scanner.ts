import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { MesaProvider } from './../../providers/mesas/mesas';
import { PedidoListaPage } from '../../pages/pedido-lista/pedido-lista';

@Component({
  selector: 'page-barcode-scanner',
  templateUrl: 'barcode-scanner.html',
})

export class BarcodeScannerPage {
    scannedCode = null;
    url:String;
    items: any;
   
    constructor(private barcodeScanner: BarcodeScanner,
                private mesaProvider: MesaProvider,
                public navCtrl: NavController) { }
   
    scanCode() {
      this.barcodeScanner.scan().then(barcodeData => {
        this.scannedCode = barcodeData.text;
        this.pegaMesaPorQrCode(barcodeData.text)
      }, (err) => {
          console.log('Erro: ', err);
      });
    }

    pegaMesaPorQrCode(id) {
      this.mesaProvider.get(id)
      .then((result: any) => {
          this.navCtrl.push(PedidoListaPage,{pedidos: result.pedidos});
        });
    }

   
  }