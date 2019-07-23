import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FunctionCallerService {

/////////////////////////////////// Initial QC /////////////////////////////////////////////////

  private _listners = new Subject<any>();
  private _listners2 = new Subject<any>();
  private _listners3 = new Subject<any>();
  private _listners4 = new Subject<any>();
  private _listners5 = new Subject<any>();
  private _listners6 = new Subject<any>();
  private _listners44 = new Subject<any>();
  private _listnerComment = new Subject<any>();

  listen(): Observable<any> {
     return this._listners.asObservable();
  }

  listenDeveloper(): Observable<any> {
    return this._listners2.asObservable();
 }

 listenReviewer(): Observable<any> {
  return this._listners3.asObservable();
}

listenComment(): Observable<any> {
  return this._listnerComment.asObservable();
}
listenComment1(): Observable<any> {
  return this._listnerComment1.asObservable();
}
listenComment2(): Observable<any> {
  return this._listnerComment2.asObservable();
}

listenSaveCurrentData(): Observable<any> {
  return this._listners4.asObservable();
}

listenitsSavedUserData(): Observable<any> {
  return this._listners5.asObservable();
}


submitCurrentData(): Observable<any> {
  return this._listners6.asObservable();
}

load44(): Observable<any> {
  return this._listners44.asObservable();
}

  filter(filterBy: string) {
     this._listners.next(filterBy);
  }

  DisableReviewer(filterBy: boolean) {
    this._listners2.next(filterBy);
 }

 DisableDeveloper(filterBy: boolean) {
  this._listners3.next(filterBy);

  }

  DisableComment(filterBy: boolean) {
    this._listnerComment.next(filterBy);
  
    }

  SaveCurrentData() {
    this._listners4.next();  
    }
  itsSavedUserData(filterBy: any){
    this._listners5.next(filterBy);
  }

  itsSavedUserData44(){
    this._listners44.next();
  }

  SubmitCurrentData() {
    this._listners6.next();  
    }

    

  /////////////////////////////////// 1st_QC_Rework /////////////////////////////////////////////////

  private _listners11 = new Subject<any>();
  private _listners12 = new Subject<any>();
  private _listners13 = new Subject<any>();
  private _listners14 = new Subject<any>();
  private _listners15 = new Subject<any>();
  private _listnerComment1 = new Subject<any>();

  listen1(): Observable<any> {
     return this._listners11.asObservable();
  }

  listenDeveloper1(): Observable<any> {
    return this._listners12.asObservable();
 }

 listenReviewer1(): Observable<any> {
  return this._listners13.asObservable();
}

listenSaveCurrentData1(): Observable<any> {
  return this._listners14.asObservable();
}

listenitsSavedUserData1(): Observable<any> {
  return this._listners15.asObservable();
}


  filter1(filterBy: string) {
     this._listners11.next(filterBy);
  }

  DisableReviewer1(filterBy: boolean) {
    this._listners12.next(filterBy);
 }

 DisableDeveloper1(filterBy: boolean) {
  this._listners13.next(filterBy);

  }

  DisableComment1(filterBy: boolean) {
    this._listnerComment1.next(filterBy);
  
    }

  SaveCurrentData1() {
    this._listners14.next();
  
    }
  itsSavedUserData1(filterBy: any){
    this._listners15.next(filterBy);
  }

   /////////////////////////////////// 2st_QC_Rework /////////////////////////////////////////////////

   private _listners21 = new Subject<any>();
   private _listners22 = new Subject<any>();
   private _listners23 = new Subject<any>();
   private _listners24 = new Subject<any>();
   private _listners25 = new Subject<any>();
   private _listnerComment2 = new Subject<any>();

   listen2(): Observable<any> {
      return this._listners21.asObservable();
   }
 
   listenDeveloper2(): Observable<any> {
     return this._listners22.asObservable();
  }
 
  listenReviewer2(): Observable<any> {
   return this._listners23.asObservable();
 }
 
 listenSaveCurrentData2(): Observable<any> {
   return this._listners24.asObservable();
 }
 
 listenitsSavedUserData2(): Observable<any> {
   return this._listners25.asObservable();
 }
 
 
   filter2(filterBy: string) {
      this._listners21.next(filterBy);
   }
 
   DisableReviewer2(filterBy: boolean) {
     this._listners22.next(filterBy);
  }
 
  DisableDeveloper2(filterBy: boolean) {
   this._listners23.next(filterBy);
 
   }

   DisableComment2(filterBy: boolean) {
    this._listnerComment2.next(filterBy);  
    }
 
   SaveCurrentData2() {
     this._listners24.next();
   
     }
   itsSavedUserData2(filterBy: any){
     this._listners25.next(filterBy);
   }


}
