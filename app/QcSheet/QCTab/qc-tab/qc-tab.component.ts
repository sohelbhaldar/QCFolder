import { Component, OnInit, Inject } from '@angular/core';
import { QCService } from '../../qc.service';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material';
import * as $ from 'jquery';
import { DialogOverviewExampleDialogComponent } from '../../dialog-overview-example-dialog/dialog-overview-example-dialog.component';
import { DataCreatedSuccessFullyComponent } from '../../data-created-success-fully/data-created-success-fully.component';
import { UserDataAlreadyPresentComponent } from '../../user-data-already-present/user-data-already-present.component';
import { CheckPointsComponent } from '../../CheckPoints/check-points/check-points.component';
import { FunctionCallerService } from '../../function-caller.service';
import { ServerUnreachableComponent } from '../../server-unreachable/server-unreachable.component';
import { PreviousQCFailedComponent } from '../../previous-qcfailed/previous-qcfailed.component';
import { QcFailedNumbers } from './QC-Failed-Count';
import { NoQcFailedComponent } from '../../no-qc-failed/no-qc-failed.component';
import { Subscription } from 'rxjs';


export interface ActiveXObject
{
  
}

export interface Type {
  value: string;
  viewValue: string;
}



@Component({
  selector: 'app-qc-tab',
  templateUrl: './qc-tab.component.html',
  styleUrls: ['./qc-tab.component.css']
})



export class QcTabComponent implements OnInit {

  
  loadingSubscription: Subscription;
  router : Router;
  public checkPointbutton : CheckPointsComponent ;
  IfailedCount : QcFailedNumbers;
  constructor(private service: QCService, router:Router,public dialog: MatDialog  ,private _messageService: FunctionCallerService) { 
  }

  

  status = false;
  selectedClient="" ;
  selectedType="";
  selectedProject="";
  selectedExtension="";
  selectedTFSDevID = "";
  selectedTFSSourceCodebase = "";
  Types :any[];
  ClientCodesOnly:any[];
  ProjectCodes :any[];
  ExtentionCodes : any[];
  Category ="";
  Categories = [
    {
      Id : 1,
      Name : 'Client Folder',
     },{
      Id : 2,
      Name : 'TSO Task Manager',
     },{
      Id : 1,
      Name : 'Installer',
     },{
      Id : 1,
      Name : 'Source Code',
     },{
      Id : 1,
      Name : 'Miscellaneous Info',
     },
  ]

   entries = [
    {
      id : '1',
      description: 'Developer'
    },
    {
     id : '2',
     description: 'Code Reviewer'
   },
  ]

  selectedEntry;
  username = "";

  
  resetColors()
  {
    var ClientEntryButton = document.getElementsByName( "Client Folder");
    var TSOButtons = document.getElementsByName("TSO Task Manager");
    var InstallerButtons = document.getElementsByName("Installer");
    var SCbuttons = document.getElementsByName("Source Code");
    var Mscbuttons = document.getElementsByName("Miscellaneous Info");

    $(ClientEntryButton).css("background-color", "#061d48");
    $(ClientEntryButton).css("color", "white");

    $(TSOButtons).css("background-color", "#061d48");
    $(TSOButtons).css("color", "white");

    $(InstallerButtons).css("background-color", "#061d48");
    $(InstallerButtons).css("color", "white");

    $(SCbuttons).css("background-color", "#061d48");
    $(SCbuttons).css("color", "white");

    $(Mscbuttons).css("background-color", "#061d48");    
    $(Mscbuttons).css("color", "white");

  }

  applyColor(buttons)
  {
    $(buttons).css("background-color", "white"); 
    $(buttons).css("color", "black"); 
  }

  clickFilter(entry,event):void {
   
    // this.onFilter.emit('Register click');
    
    this.selectedEntry = event.currentTarget.attributes[2].nodeValue;
    debugger;
    if(this.selectedEntry == "Client Folder")
    {
      this.resetColors();
      var buttons = document.getElementsByName(this.selectedEntry);
      this.applyColor(buttons);

    }
    else if(this.selectedEntry == "TSO Task Manager")
    {
      this.resetColors();
      var buttons = document.getElementsByName(this.selectedEntry);
      this.applyColor(buttons);
    }
    else if(this.selectedEntry == "Installer")
    {
      this.resetColors();
      var buttons = document.getElementsByName(this.selectedEntry);
      this.applyColor(buttons);
    }
    else if(this.selectedEntry == "Source Code")
    {
      this.resetColors();
      var buttons = document.getElementsByName(this.selectedEntry);
      this.applyColor(buttons);
    }
    else if(this.selectedEntry == "Miscellaneous Info")
    {
      this.resetColors();
      var buttons = document.getElementsByName(this.selectedEntry);
      this.applyColor(buttons);
    }

    this._messageService.filter(entry);
    
}

//$('td').find(':input').prop("disabled", true);
selectedRadio = "";
ReviewerDisabled = false;
DeveloperDisabled = false;
savedUserData :any = [];

onSelectionRadioButton(whoAmI)  
{
  debugger;
  if(whoAmI == "Developer")
  {
    debugger;
    this.ReviewerDisabled = true;
    this.selectedRadio = "Developer"
    this.service.SetUser("Developer");
   // this._messageService.DisableReviewer(this.ReviewerDisabled);
  } 
  else
  {
    debugger;
    this.DeveloperDisabled = true;
    this.selectedRadio = "Reviewer";
    this.service.SetUser("Reviewer");
   // this._messageService.DisableDeveloper(this.DeveloperDisabled);
  }
} 


  ngOnInit() {
   
    this.service
        .ClientCodeData()
        .subscribe((response) => {
            const result = response.json();
            this.ClientCodesOnly = result; 
            if(result[0].status == false)
            {
                this.ServerUnreachable();
            }
            else
            {
              this.username = result[0].user;
              
            }
        });

        //this.username = this.service.getHostname();
  }
 

  selectedDropValue()
  {
      this.service
      .ClientCodeProjectCodes(this.selectedClient)
      .subscribe((response) => {
          const result = response.json();
        this.ProjectCodes = result;
          
      });

      this.service
      .ClientCodeType(this.selectedClient)
      .subscribe((response) => {        
          const result = response.json();
        this.Types = result;
          
      });

      this.service
      .ExtensionCodes(this.selectedClient)
      .subscribe((response) => {
        
          const result = response.json();
        this.ExtentionCodes = result;
          
      });
  }

  SubmitCurrentData()
  {
    debugger;
    this._messageService.SubmitCurrentData();
  }


  i ;
  flag = false;
  ReviewFailedCount = [];

  ResetRadioButtonsStatus()
  {
    this._messageService.DisableReviewer(true);
    this._messageService.DisableDeveloper(true);
    this._messageService.DisableComment(true);
    this._messageService.DisableReviewer1(true);
    this._messageService.DisableDeveloper1(true);
    this._messageService.DisableComment1(true);
    this._messageService.DisableReviewer2(true);
    this._messageService.DisableDeveloper2(true);
    this._messageService.DisableComment2(true);
  }

  FailedCheckPoint = "";

  onLoadData()
  {
  
    this.ResetRadioButtonsStatus();
    this.ReviewFailedCount = [];
    this.flag = false;
    if(this.selectedRadio == "" || this.selectedClient == ""||this.selectedProject == "" || this.selectedType == "" 
          || this.selectedTFSDevID == "" || this.selectedExtension == "" || this.selectedTFSSourceCodebase == "")
    {
      this.openDialog();
     
    }
    else
    {
      this.service.setUserValues(this.selectedRadio,this.selectedClient,this.selectedProject,this.selectedType,
        this.selectedTFSDevID,this.selectedExtension,this.selectedTFSSourceCodebase,this.username);
      
        this.service
        .insertUserValues(this.selectedClient,this.selectedProject, this.selectedType,
           this.selectedTFSDevID,this.selectedExtension,this.selectedTFSSourceCodebase )
        .subscribe((response) => {
            // cache the token
            // const token = response.headers.get('x-auth-token');
            //sessionStorage['token'] = token;
            debugger;
            const resultOfSubmission = response.json();
            


            if(resultOfSubmission.Initial_QC == "submitted")
            {              
              this.service.set_Initial_QC_status(true);
              this._messageService.DisableReviewer(true);
              this._messageService.DisableDeveloper(true);
              this._messageService.DisableComment(true);

                 if(resultOfSubmission.QC_Rework_1st == "submitted")
                {
                  this.service.set_QC_Rework_1(true);
                  this._messageService.DisableReviewer1(true);
                  this._messageService.DisableDeveloper1(true);
                  this._messageService.DisableComment1(true);
                  
                  if(resultOfSubmission.QC_Rework_2nd == "submitted")
                   {
                    this._messageService.DisableReviewer2(true);
                    this._messageService.DisableDeveloper2(true);
                    this._messageService.DisableComment2(true);
                   }
                   else
                   {
                    debugger;
                    if( this.selectedRadio == "Developer")
                    {
                      this.service.SetUser("Developer");   
                      this._messageService.DisableReviewer2(true);
                      this._messageService.DisableDeveloper2(false);
                      this._messageService.DisableComment2(false);
                           
                    }
                    else
                    {
                      debugger;
                      this.service.SetUser("Reviewer");
                      this._messageService.DisableDeveloper2(true);
                      this._messageService.DisableReviewer2(false);
                      this._messageService.DisableComment2(false);
                    }
                   }
                }
                else
                {
                  this.service.set_QC_Rework_1(false);
                
                  if( this.selectedRadio == "Developer")
                  {
                    debugger;
                    debugger;
                    this.service.SetUser("Developer");   
                    this._messageService.DisableReviewer1(true);
                    this._messageService.DisableDeveloper1(false);
                   this._messageService.DisableComment1(false);
                         
                  }
                  else
                  {
                    debugger;
                    this.service.SetUser("Reviewer");
                    this._messageService.DisableDeveloper1(true);
                    this._messageService.DisableReviewer1(false);
                    this._messageService.DisableComment1(false);
                  }
                }
            }            
            else 
            {
              this.service.set_Initial_QC_status(false);
              
              if( this.selectedRadio == "Developer")
              {
                debugger;
                this.service.SetUser("Developer");   
                this._messageService.DisableReviewer(true);
                this._messageService.DisableDeveloper(false);
               this._messageService.DisableComment(false);
                
              }
              else
              {
                debugger;                             
                this.service.SetUser("Reviewer");
                 this._messageService.DisableDeveloper(true);
                 this._messageService.DisableReviewer(false);
                 this._messageService.DisableComment(false);
              }
            }

            if(resultOfSubmission.status == true)
            {           
              this.openDialogUserDataCreatedSuccessFully();
              this.itsSavedUserData44();
            }
            else
            {
              this.UserDataAlreadyPresent();
              this.itsSavedUserData44();
              debugger;
              this.service.LoadSavedData(this.selectedClient,this.selectedProject,this.selectedExtension).subscribe((response) =>{
                debugger;
                const result = response.json();
                this.savedUserData = result;

                   if(resultOfSubmission.QC_Rework_2nd == "submitted" && this.flag == false )
                { 
                  this.ReviewFailedCount = [];
                  for(this.i = 0 ; this.i < this.savedUserData.length ; this.i++)
                  {             
                  if(this.savedUserData[this.i].QC_Resource_2  == "Fail " )
                    {
                        this.flag = true;
                        this.ReviewFailedCount.push(this.savedUserData[this.i].Check_Id);
                    }   
                  }
                }
                 else if(resultOfSubmission.QC_Rework_1st == "submitted" && this.flag == false )
                  { 
                    this.ReviewFailedCount = [];
                    for(this.i = 0 ; this.i < this.savedUserData.length ; this.i++)
                    {             
                    if(this.savedUserData[this.i].QC_Resource_1  == "Fail " )
                      {
                          this.flag = true;
                          this.ReviewFailedCount.push(this.savedUserData[this.i].Check_Id);
                      }   
                    }
                  }
                else if(this.flag == false)
                {
                    if(resultOfSubmission.Initial_QC == "submitted"  && this.flag == false)
                    {
                      this.ReviewFailedCount = [];
                      for(this.i = 0 ; this.i < this.savedUserData.length ; this.i++)
                       {
                        if(this.savedUserData[this.i].QC_Resource  == "Fail ")
                          {
                              this.flag = true;
                              this.ReviewFailedCount.push(this.savedUserData[this.i].Check_Id);                              
                          }   
                       }
                    }
                }
                debugger;
                if(this.flag == true && this.selectedRadio == "Developer" )
                {
                  this.service.set_Initial_QC_failed_status(true);
                  this.service.set_QC_Rework_failed_1(true);
                  this.PreviousQCFailed(this.ReviewFailedCount);
                  this.FailedCheckPoint = "Failed Check Points are : ";
                  //this.ReviewFailedCount = [];
                  this.flag = false;
                }
                else if( this.selectedRadio == "Developer" && (resultOfSubmission.Initial_QC == "submitted" || resultOfSubmission.QC_Rework_1st == "submitted"))
                {

                  this.service.set_Initial_QC_failed_status(false);
                  this.service.set_QC_Rework_failed_1(false);
                  this.NoQCFailed();

                  this._messageService.DisableReviewer1(true);
                  this._messageService.DisableDeveloper1(true);
                  this._messageService.DisableComment1(true);
                  this._messageService.DisableReviewer2(true);
                  this._messageService.DisableDeveloper2(true);
                  this._messageService.DisableComment2(true);
                }

                this.itsSavedUserData(this.savedUserData);

              });
            }

        });
      
    }
  
  }

  itsSavedUserData(savedUserData)
  {
    this._messageService.itsSavedUserData(savedUserData);
  }

  itsSavedUserData44()
  {
    this._messageService.itsSavedUserData44();
  }
  
  openDialog(): void {
    let dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }

  ServerUnreachable(): void {
    let dialogRef = this.dialog.open(ServerUnreachableComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }

  openDialogUserDataCreatedSuccessFully(): void {
    let dialogRef1 = this.dialog.open(DataCreatedSuccessFullyComponent);

    dialogRef1.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }

 UserDataAlreadyPresent(): void {
    let dialogRef2 = this.dialog.open(UserDataAlreadyPresentComponent);

    dialogRef2.afterClosed().subscribe(result => {
      console.log('User Data Already Present');
     
    });
  }

  NoQCFailed(): void {
    let dialogRef2 = this.dialog.open(NoQcFailedComponent);

    dialogRef2.afterClosed().subscribe(result => {
      console.log('No QC Failed');
     
    });
  }

  PreviousQCFailed(failedCount): void {
    let dialogRef2 = this.dialog.open(PreviousQCFailedComponent,{
      data : failedCount,
    });

    dialogRef2.afterClosed().subscribe(result => {
      console.log('Previous QC Failed');
     
    });
  }

}

