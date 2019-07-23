import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs";
import 'rxjs/add/operator/do';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { HttpErrorResponse } from "@angular/common/http";
import { CheckPointsComponent } from './CheckPoints/check-points/check-points.component';

@Injectable({
  providedIn: 'root'
})
export class AngularInterceptorService implements HttpInterceptor {

 
  constructor( ) { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
   {
     debugger;
    return next.handle(req).do(event => {}, err => {
      if(err instanceof HttpErrorResponse){ 
        // here you can even check for err.status == 404 | 401 etc
          console.log("Error Caught By Interceptor");
          Observable.throw(err); // send data to service which will inform the component of the error and in turn the user
      }
  });

  }

  // private _listners = new Subject<any>();

  //   listen(): Observable<any> {
  //      return this._listners.asObservable();
  //   }

  //   filter(filterBy: string) {
  //      this._listners.next(filterBy);
  //   }

  // selectClientFolder()
  // {
  //   debugger;
  //  // this.checkPoint.selectClientFolder();
  // }

}
