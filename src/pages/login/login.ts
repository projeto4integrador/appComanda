import { Component } from '@angular/core';
import { NavController, NavParams,ToastController} from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { TabsPage } from '../../pages/tabs/tabs';
import { MesaProvider } from './../../providers/mesas/mesas';
import { PedidoListaPage } from '../../pages/pedido-lista/pedido-lista';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  model:User;
  data : any;
  scannedCode = null;
  rootPage:any = TabsPage;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public loginProvider:LoginProvider,
    private toast: ToastController,private barcodeScanner: BarcodeScanner,private mesaProvider: MesaProvider) {
      this.model = new User();
      this.model.usuario = 'andre';
      this.model.senha = '1234';
  }

  ionViewDidLoad() {}

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

logar() {
  this.loginProvider.login(this.model.usuario,this.model.senha)
    .then((result: any) => {
      this.toast.create({ message: 'Usuário logado com sucesso.: ' + result.usuario, position: 'botton', duration: 3000 }).present();
      
      //Redirecionar o usuario para outra tela usando o navCtrl
      //this.navCtrl.pop();
      this.navCtrl.setRoot(this.rootPage)
    })
    .catch((error: any) => {
      this.toast.create({ message: 'Erro ao efetuar login. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
    });
}
}

export class User {
  usuario: string;
  senha: string;
}
