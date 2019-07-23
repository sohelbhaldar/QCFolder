import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy   } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoadingScreenService } from './loading-screen.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.css']
})
export class LoadingScreenComponent implements AfterViewInit, OnDestroy {
  
  debounceTime: number = 1000;
  loading: boolean = false;	 
  loadingSubscription: Subscription;	 

    constructor(private loadingScreenService: LoadingScreenService,
              private _elmRef: ElementRef,
              private _changeDetectorRef: ChangeDetectorRef) {
  }	
    // ngOnInit() {
  //   debugger;
  //   // this.loadingSubscription = this.loadingScreenService.loadingStatus.pipe(
  //   //  // debounceTime(500)
  //   // ).subscribe((value) => {
  //   //   debugger;
  //   //   this.loading = value;      
  //   // });    
  //   debugger;
  // }

  ngAfterViewInit(): void {
    debugger;
   //  this._elmRef.nativeElement.style.display = 'block';

     this._changeDetectorRef.detectChanges();

     this.loadingScreenService.loadingStatus.isStopped;

     this.loadingScreenService.loadingStatus.next((status)=> { status })
     {

     }
      this.loadingSubscription = this.loadingScreenService.loadingStatus.pipe(debounceTime(this.debounceTime)).subscribe(
       (status: boolean) => {
        this._elmRef.nativeElement.style.display = status ? 'block' : 'none';
       this._changeDetectorRef.detectChanges();
       debugger;
       }
    );
  }


  ngOnDestroy() {
    debugger;
    this.loadingSubscription.unsubscribe();
  }


}
