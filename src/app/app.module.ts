import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {RouterModule} from '@angular/router';
import {ROUTES} from './app.routes';
import {ProdutoComponent} from './produto/produto.component';
import {ClienteComponent} from './cliente/cliente.component';
import {VendaComponent} from './venda/venda.component';
import {LocalStorageModule} from 'angular-2-local-storage';
import {ProdutoService} from "./produto/produto.service";
import {FormsModule} from "@angular/forms";
import {ClienteService} from "./cliente/cliente.service";
import {Venda} from "./venda/venda";
import {VendaService} from "./venda/venda.service";
import {NguiAutoCompleteModule} from "@ngui/auto-complete";
import {ToastModule} from "ng2-toastr";
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProdutoComponent,
    ClienteComponent,
    VendaComponent
  ],
  imports: [
    BrowserModule,
    ToastModule.forRoot(),
    BrowserAnimationsModule,
    NoopAnimationsModule,
    FormsModule,
    NguiAutoCompleteModule,
    RouterModule.forRoot(ROUTES),
    LocalStorageModule.withConfig({
      prefix: 'app-root',
      storageType: 'localStorage'
    })
  ],
  providers: [
    ProdutoService,
    ClienteService,
    VendaService,
    {provide: LOCALE_ID, useValue: "pt-BR"}
    ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
