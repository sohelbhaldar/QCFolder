import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import {  RouterModule } from '@angular/router';
import { LoginComponent } from './QcSheet/login/login.component';
import {MatRippleModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatTableModule} from '@angular/material/table';

import {MatRadioModule} from '@angular/material/radio';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './QcSheet/Home/home-page/home-page.component';
import { QcTabComponent} from './QcSheet/QCTab/qc-tab/qc-tab.component';
import { CheckPointsComponent } from './QcSheet/CheckPoints/check-points/check-points.component';
import { MatPaginatorModule } from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogOverviewExampleDialogComponent } from './QcSheet/dialog-overview-example-dialog/dialog-overview-example-dialog.component';
import { DataCreatedSuccessFullyComponent } from './QcSheet/data-created-success-fully/data-created-success-fully.component';
import { UserDataAlreadyPresentComponent } from './QcSheet/user-data-already-present/user-data-already-present.component';
import { AngularInterceptorService } from './QcSheet/angular-interceptor.service';
import { PleaseEnterCommentComponent } from './QcSheet/please-enter-comment/please-enter-comment.component';
import { PleaseEnterAllCheckPointsComponent } from './QcSheet/please-enter-all-check-points/please-enter-all-check-points.component';
import { DataSubmittedSuccessfullyComponent } from './QcSheet/data-submitted-successfully/data-submitted-successfully.component';
import { ServerUnreachableComponent } from './QcSheet/server-unreachable/server-unreachable.component';
import { PreviousQCFailedComponent } from './QcSheet/previous-qcfailed/previous-qcfailed.component';
import { NoQcFailedComponent } from './QcSheet/no-qc-failed/no-qc-failed.component';
import { LoadingScreenComponent } from './QcSheet/loading-screen/loading-screen.component';
import { LoadingScreenInterceptor } from './QcSheet/loading-screen/loading.interceptor';
import { WINDOW_PROVIDERS } from './QcSheet/QCTab/qc-tab/windows-provider';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,   
    HomePageComponent, QcTabComponent,
    CheckPointsComponent,
    DialogOverviewExampleDialogComponent,
    DataCreatedSuccessFullyComponent,
    UserDataAlreadyPresentComponent,
    PleaseEnterCommentComponent,
    PleaseEnterAllCheckPointsComponent,
    DataSubmittedSuccessfullyComponent,
    ServerUnreachableComponent,
    PreviousQCFailedComponent,
    NoQcFailedComponent,
    LoadingScreenComponent,
   
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatButtonModule, MatCheckboxModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    MatRippleModule,
    MatRadioModule,
   MatTabsModule,
   BrowserAnimationsModule,
   MatSidenavModule,
   MatTableModule,
   MatPaginatorModule,
   MatSelectModule,
   MatDialogModule,
  
    RouterModule.forRoot([
      {path : 'login' , component : LoginComponent},
      {path : 'HomePage' , component : HomePageComponent},      
      {path : '' , redirectTo : 'HomePage' , pathMatch : 'full'},
      {path : 'CheckPoints',component:CheckPointsComponent}
    ])
    
  ],
  entryComponents: [
    // See https://material.angular.io/components/dialog/overview#configuring-dialog-content-via-code-entrycomponents-code- for more info
    DialogOverviewExampleDialogComponent,
    DataCreatedSuccessFullyComponent,
    UserDataAlreadyPresentComponent,
    PleaseEnterCommentComponent,
    PleaseEnterAllCheckPointsComponent,
    DataSubmittedSuccessfullyComponent,
    ServerUnreachableComponent,
    PreviousQCFailedComponent,
    NoQcFailedComponent,
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,    
    MatRippleModule,
    MatSidenavModule,
  ],
  providers: [
    WINDOW_PROVIDERS,
    [ { provide: HTTP_INTERCEPTORS, useClass: 
      AngularInterceptorService, multi: true } ],
      {
        provide: HTTP_INTERCEPTORS,
        useClass: LoadingScreenInterceptor,
        multi: true
      }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
