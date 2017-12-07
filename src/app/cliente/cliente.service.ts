import {Injectable} from "@angular/core";
import {GenericService} from "../generic.service";
import {Cliente} from "./cliente";
import {LocalStorageService} from "angular-2-local-storage";

@Injectable()
export class ClienteService extends GenericService<Cliente> {

  constructor(protected localStorageService: LocalStorageService) {
    super(localStorageService);
  }

  protected getEntityClass(): any {
    return Cliente;
  }

}
