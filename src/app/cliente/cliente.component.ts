import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {Cliente} from "./cliente";
import {ClienteService} from "./cliente.service";
import {ToastsManager} from "ng2-toastr";

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html'
})
export class ClienteComponent implements OnInit {

  public cliente: Cliente = new Cliente();
  public listClientes: Cliente[];

  constructor(private clienteService: ClienteService, public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.buscarCliente();
  }

  public save(): void {
    if (this.validate()) {
      this.clienteService.save(this.cliente).subscribe(() => {
        this.buscarCliente();
        this.limparCampos();
        this.mensagemSucesso();
      })
    } else {
      this.mensagemErro();
    }
  }

  private validate(): boolean {
    if (this.cliente.nome != null && this.cliente.email != null && this.cliente.dataNascimento != null && this.cliente.sexo != null &&
      this.cliente.telefone != null && this.cliente.cidade != null && this.cliente.estado != null) {
      return true;
    }
    return false;
  }

  public buscarCliente(): void {
    this.listClientes = this.clienteService.listAll();
  }

  public limparCampos(): void {
    this.cliente = new Cliente();
  }

  public remove(clienteSelecionado: Cliente): void {
    this.clienteService.remove(clienteSelecionado).subscribe(() => {
      this.buscarCliente();
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

  public retornaSexoCliente(sexoCliente: string): string {
    let tipoSexoCliente: string = "";
    if (sexoCliente === "F") {
      tipoSexoCliente = "Feminino";
    } else {
      tipoSexoCliente = "Masculino";
    }
    return tipoSexoCliente;
  }
}
