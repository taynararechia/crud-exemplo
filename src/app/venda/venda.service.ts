import {Injectable} from '@angular/core';
import {LocalStorageService} from "angular-2-local-storage";
import {Venda} from "./venda";
import {GenericService} from "../generic.service";

@Injectable()
export class VendaService extends GenericService<Venda> {

  constructor(protected localStorageService: LocalStorageService) {
    super(localStorageService);
  }

  protected getEntityClass(): any {
    return Venda;
  }

}
