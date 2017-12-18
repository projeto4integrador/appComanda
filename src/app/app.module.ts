import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

// Importação Http
import { HttpModule } from '@angular/http';

// Importações de página
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { PedidoPage } from '../pages/pedido/pedido';
import { MesaListarPage} from '../pages/mesa-listar/mesa-listar';
import { CategoriaListarPage} from '../pages/categoria-listar/categoria-listar';
import { ProdutoListarPage} from '../pages/produto-listar/produto-listar';
import { BarcodeScannerPage} from '../pages/barcode-scanner/barcode-scanner';
import { PedidoListaPage} from '../pages/pedido-lista/pedido-lista';
import { LoginPage} from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MesaProvider } from '../providers/mesas/mesas';
import { CategoriasProvider } from '../providers/categorias/categorias';
import { ProdutosProvider } from '../providers/produtos/produtos';
import { LoginProvider } from '../providers/login/login';
import { CarrinhoProvider } from '../providers/carrinho/carrinho';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    PedidoPage,
    MesaListarPage,
    CategoriaListarPage,
    ProdutoListarPage,
    PedidoListaPage,    
    BarcodeScannerPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    HttpModule,    
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    PedidoPage,
    MesaListarPage,
    CategoriaListarPage,
    ProdutoListarPage,
    PedidoListaPage,
    BarcodeScannerPage,
    LoginPage
    ],
  providers: [
    StatusBar,SplashScreen,
    HttpModule,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MesaProvider,
    CategoriasProvider,
    ProdutosProvider, 
    LoginProvider, 
    CarrinhoProvider
  ]
})
export class AppModule {}
