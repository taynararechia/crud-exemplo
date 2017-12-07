import {Entityid} from "../entityid";
import {Produto} from "../produto/produto";
import {Cliente} from "../cliente/cliente";

export class Venda extends Entityid {
  public cliente: Cliente;
  public produto: Produto;
  public quantidadeVenda: number;

  public getValorProduto(): number {
    return this.quantidadeVenda * this.produto.valor;
  }
}

