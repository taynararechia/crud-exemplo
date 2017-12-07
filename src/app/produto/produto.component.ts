import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {Produto} from "./produto";
import {ProdutoService} from "./produto.service";
import {ToastsManager} from "ng2-toastr";

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html'
})
export class ProdutoComponent implements OnInit {

  public produto: Produto = new Produto();
  public listProdutos: Produto[];

  constructor(private produtoService: ProdutoService, public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.buscarProduto();
  }

  public save(): void {
    if (this.produto.nome != null && this.produto.quantidadeProduto != null && this.produto.valor != null) {
      this.produtoService.save(this.produto).subscribe(() => {
        this.buscarProduto();
        this.limparCampos();
        this.mensagemSucesso();
      })
    } else {
      this.mensagemErro();
    }
  }

  public buscarProduto(): void {
    this.listProdutos = this.produtoService.listAll();
  }

  public limparCampos(): void {
    this.produto = new Produto();
  }

  public remove(produtoSelecionado: Produto): void {
    this.produtoService.remove(produtoSelecionado).subscribe(() => {
      this.buscarProduto();
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
