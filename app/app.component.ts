import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { AngularInterceptorService } from './QcSheet/angular-interceptor.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app1';

  constructor(private router: Router ,private intercept:AngularInterceptorService) {
    
}



//   home()  {
//     this.router.navigate(['/homePage']);
//   }

//   login() {
//     this.router.navigate(['/login']);
// }

}
