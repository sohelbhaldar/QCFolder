import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoadingScreenService {

  private _loading: boolean = false;
  
  public loadingStatus : Subject<any> =  new Subject<any>(); 
  

  get loading():boolean {
    debugger;
    return this._loading;
  }

  set loading(value) {
    debugger;
    this._loading = value;
    this.loadingStatus.next(value);
  }

  startLoading() {
    debugger;
    this.loading = true;
  }

  stopLoading() {
    debugger;
    this.loading = false;
  }
}