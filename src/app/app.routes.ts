import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProdutoComponent} from './produto/produto.component';
import {ClienteComponent} from './cliente/cliente.component';
import {VendaComponent} from './venda/venda.component';

export const ROUTES: Routes = [
  {path: '', redirectTo: 'app', pathMatch: 'full'},
  {
    path: 'app', component: HomeComponent, children: [
    {path: 'produto', component: ProdutoComponent},
    {path: 'cliente', component: ClienteComponent},
    {path: 'venda', component: VendaComponent}
  ]
  },
  {path: '**', redirectTo: 'app', pathMatch: 'full'}
];
