import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {Venda} from "./venda";
import {VendaService} from "./venda.service";
import {Cliente} from "../cliente/cliente";
import {Produto} from "../produto/produto";
import {ProdutoService} from "../produto/produto.service";
import {ClienteService} from "../cliente/cliente.service";
import {ToastsManager} from "ng2-toastr";

@Component({
  selector: 'app-venda',
  templateUrl: './venda.component.html'
})
export class VendaComponent implements OnInit {

  public venda: Venda = new Venda();
  public listVenda: Venda[];
  public sourceCliente: Cliente[];
  public sourceProduto: Produto[];

  constructor(private vendaService: VendaService, private produtoService: ProdutoService, private clienteService: ClienteService,
              public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.buscarVenda();
    this.sourceCliente = this.clienteService.listAll();
    this.sourceProduto = this.produtoService.listAll();
  }

  public save(): void {
    if (this.venda.cliente != null && this.venda.cliente != null && this.venda.quantidadeVenda != null) {
      this.vendaService.save(this.venda).subscribe(() => {
        this.buscarVenda();
        this.limparCampos();
        this.mensagemSucesso();
      })
    } else {
      this.mensagemErro();
    }
  }

  public buscarVenda(): void {
    this.listVenda = this.vendaService.listAll();
  }

  public limparCampos(): void {
    this.venda = new Venda();
  }

  public remove(vendaSelecionada: Venda): void {
    this.vendaService.remove(vendaSelecionada).subscribe(() => {
      this.buscarVenda();
      this.mensagemInfo();
    })
  }

  mensagemSucesso() {
    this.toastr.success('Dados salvos com sucesso!', 'Successo!');
  }

  mensagemErro() {
    this.toastr.error('Você não preencheu todos os campos!', 'Oops =(!');
  }

  mensagemInfo() {
    this.toastr.info('Registro excluído com sucesso!');
  }
}
