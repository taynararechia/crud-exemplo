import {LocalStorageService} from 'angular-2-local-storage';
import {Entityid} from './entityid';
import {Observable} from 'rxjs/Observable';
import {plainToClass} from 'class-transformer';
import index from "@angular/cli/lib/cli";

export abstract class GenericService<E extends Entityid> {

  constructor(protected localStorageService: LocalStorageService) { }

  protected abstract getEntityClass(): any;

  public listAll(): E[] {
    let listAll: E[] = plainToClass(this.getEntityClass(), this.localStorageService.get(this.getEntityClass().name)) as E[];
    if(!listAll){
      listAll = [];
    }
    return listAll;
  }

  public nextId(): number {
    let nextId = this.localStorageService.get(this.getEntityClass().name) as number;
    nextId++;
    this.localStorageService.set(this.getEntityClass(), nextId);
    return nextId;
  }

  public save(entity: E): Observable<any> {
    return Observable.create(observer => {
      let listAll: E[] = this.listAll();
      entity.id = this.nextId();
      listAll.push(entity);
      this.localStorageService.set(this.getEntityClass().name, listAll);
      observer.next();
    });
  }

  public remove(entity: E): Observable<any> {
    return Observable.create(observer => {
      let listAll = this.listAll();
      let index: number = -1;
      for(let i in listAll){
        if(listAll[i].id === entity.id){
          index = parseInt(i);
          break;
        }
      }
      if(index >= 0){
        listAll.splice(index, 1);
        this.localStorageService.set(this.getEntityClass().name, listAll);
      }
      observer.next();
    })
  }
}
