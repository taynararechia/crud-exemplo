import {Injectable} from '@angular/core';
import {GenericService} from '../generic.service';
import {Produto} from './produto';
import {LocalStorageService} from 'angular-2-local-storage';

@Injectable()
export class ProdutoService extends GenericService<Produto> {

  constructor(protected localStorageService: LocalStorageService) {
    super(localStorageService);
  }

  protected getEntityClass(): any {
    return Produto;
  }

}
