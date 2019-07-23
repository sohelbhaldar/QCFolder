import { Component, OnInit, ViewChild ,Renderer2, ElementRef, ChangeDetectorRef, AfterViewInit, OnDestroy } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import * as $ from 'jquery';
import { QCService } from '../../qc.service';
import { FunctionCallerService } from '../../function-caller.service';
import { DialogOverviewExampleDialogComponent } from '../../dialog-overview-example-dialog/dialog-overview-example-dialog.component';
import { PleaseEnterCommentComponent } from '../../please-enter-comment/please-enter-comment.component';
import { PleaseEnterAllCheckPointsComponent } from '../../please-enter-all-check-points/please-enter-all-check-points.component';
import { DataSubmittedSuccessfullyComponent } from '../../data-submitted-successfully/data-submitted-successfully.component';
import { LoadingScreenService } from '../../loading-screen/loading-screen.service';
import { LoadingScreenInterceptor } from '../../loading-screen/loading.interceptor';

@Component({
  selector: 'app-check-points',
  templateUrl: './check-points.component.html',
  styleUrls: ['./check-points.component.css']
})
export class CheckPointsComponent implements OnInit {
  
 // allCheckPoint1 = {};
   
  constructor (private _LoadingScreenService : LoadingScreenService, private renderer: Renderer2,private service : QCService, private _messageService: FunctionCallerService ,public dialog: MatDialog)
  {
    /////////////////////////////////////////////// Initial QC/////////////////////////////////////////////////////////////

    
    this._messageService.listen().subscribe((m:string) => {
      console.log(m);
      debugger;
      this.onFilterClick(m);
    
    })

    this._messageService.listenDeveloper().subscribe((m:boolean) => {
      console.log(m);
      debugger;
      this.disableReviewer(m)
    })

    this._messageService.listenReviewer().subscribe((m:boolean) => {
      console.log(m);
      debugger;
      this.disableDeveloper(m)
    })

    this._messageService.listenitsSavedUserData().subscribe((m:any) => {
      console.log(m);
      debugger;
      this.SavedUserData(m)
    })

    this._messageService.submitCurrentData().subscribe((m:any) => {
      console.log(m);
      debugger;
      this.SubmitCurrentData();
    })

    this._messageService.load44().subscribe((m:any) => {
      console.log(m);
      debugger;
      this.SavedUserData44();
    })
      /////////////////////////////////////////////// 1st QC Rework/////////////////////////////////////////////////////////////

      
    this._messageService.listen1().subscribe((m:string) => {
      console.log(m);
      debugger;
      this.onFilterClick1(m);
    
    })

    this._messageService.listenDeveloper1().subscribe((m:boolean) => {
      console.log(m);
      debugger;
      this.disableReviewer1(m)
    })

    this._messageService.listenReviewer1().subscribe((m:boolean) => {
      console.log(m);
      debugger;
      this.disableDeveloper1(m)
    })

      /////////////////////////////////////////////// 2nd QC Rework/////////////////////////////////////////////////////////////

      
      this._messageService.listen2().subscribe((m:string) => {
        console.log(m);
        debugger;
        this.onFilterClick2(m);
      
      })
  
      this._messageService.listenDeveloper2().subscribe((m:boolean) => {
        console.log(m);
        debugger;
        this.disableReviewer2(m)
      })
  
      this._messageService.listenReviewer2().subscribe((m:boolean) => {
        console.log(m);
        debugger;
        this.disableDeveloper2(m)
      })

      this._messageService.listenComment().subscribe((m:boolean) => {
        console.log(m);
        debugger;
        this.disableComment(m)
      })

      this._messageService.listenComment1().subscribe((m:boolean) => {
        console.log(m);
        debugger;
        this.disableComment1(m)
      })
      this._messageService.listenComment2().subscribe((m:boolean) => {
        console.log(m);
        debugger;
        this.disableComment2(m)
      })
  
    
  }

  ngOnInit() {
    //this.dataSource1.paginator = this.paginator;

    // $(document).ready(function() {
    //   $(".main-table").clone(true).appendTo('#table-scroll').addClass('clone');   
    // });
    this._LoadingScreenService.loading = true;
    this._LoadingScreenService.startLoading();

    try {
      this.service
         .CheckPoints()
         .subscribe((response) => {
             debugger;
             const result = response.json();;
             this.checkPointData = result; 
             //this.checkPointDataCategory = this.checkPointData[0].Key;
             while(this.checkPointData[this.i].Key  == "Client Folder")
             {
               this.checkPointDataCategory.push(this.checkPointData[this.i].Value); 
               this.i++;
               if(this.checkPointData[this.i].Key  != "Client Folder") 
               {
                 break;
               }
              }     
                  if(  this._LoadingScreenService.loading)
                  {
                    this._LoadingScreenService.loading = false;
                    this._LoadingScreenService.stopLoading();
                  }
         });
      
    } catch (error) {
      console.log(error);
      if(  this._LoadingScreenService.loading)
      {
        this._LoadingScreenService.loading = false;
        this._LoadingScreenService.stopLoading();
      }
    }
    


   }
 
   changeColor(entry,position,selectedId)
   {
      if(entry == "Pass")
      $("#"+selectedId+""+position+"").css("background-color", "green");
    else if(entry == "Fail ")
    $("#"+selectedId+""+position+"").css("background-color", "red");
    else
    $("#"+selectedId+""+position+"").css("background-color", "aqua");
   }

    /////////////////////////////////////////////// Initial QC/////////////////////////////////////////////////////////////

  isDisabledDeveloper = true;
  isDisabledReviewer = true ;
  id={};
  color="";
  index = 1;
  flag  = false; 
  checkPointData:any[];
  checkPointDataCategory : any = [];  
  checkPointcategory = {};
  i:number = 0;
  j :number = 0;
  isDisabledComment = true;
  checkedValues = {};
  UserComment = "";
  isValid :boolean ;

  entriesDeveloper = [
    {
      id : '1',
      description: 'Pass',
      color: '#c9ffe2'
    },
    {
     id : '2',
     description: 'Fail ',
     color: '#ffc9c9'

   },
   {
    id : '3',
    description: 'N/A ',
    color: ''
  },
  ]

  entriesReviewer = [
    {
      id : 'A',
      description: 'Pass',
      color: '#c9ffe2'
    },
    {
     id : 'B',
     description: 'Fail ',
     color: '#ffc9c9'

   },
   {
    id : 'C',
    description: 'N/A ',
    color: ''
  },
  ]


  checkColor(Developer,QC_Resource,check_ID)
  {
    if( Developer  == "Pass"||  QC_Resource  == "Pass")
    {
      var selection = document.getElementsByName(check_ID);
      $(selection).css("background-color", "greenyellow");   
    }
    else if(  Developer  == "Fail "||  QC_Resource  == "Fail ")
   {
    var selection = document.getElementsByName(check_ID);
    $(selection).css("background-color", "rgb(250, 95, 48)");          
  
   }
   else  if(  Developer  == "N/A "||  QC_Resource  == "N/A ")
   {
    var selection = document.getElementsByName(check_ID);
      $(selection).css("background-color", "aqua");   
   }
   else
   {
    // var selection = document.getElementsByName(check_ID);
    // $(selection).css("background-color", "white");  
    // $("#No"+check_ID+"").css("background-color", "white"); 
   }
  }
 
  SavedUserData(savedUserData)
  {
      debugger;
      this.i = 0;
      this.j = 0;
      for ( this.i = 0; this.i < this.checkPointData.length; this.i++)
      {    
         for(this.j = 0 ;this.j < savedUserData.length ;this.j++) 
           {
             
             if( this.checkPointData[this.i].Value.Check_Id  == savedUserData[this.j].Check_Id)
                { 
                  this.checkPointData[this.i].Value.Developer = savedUserData[this.j].Developer;
                  this.checkPointData[this.i].Value.QC_Resource = savedUserData[this.j].QC_Resource;            
                  this.checkPointData[this.i].Value.Comment = savedUserData[this.j].Comment;

                  this.checkColor( this.checkPointData[this.i].Value.Developer,"",this.checkPointData[this.i].Value.Check_Id);
                  this.checkColor( "", this.checkPointData[this.i].Value.QC_Resource,this.checkPointData[this.i].Value.Check_Id);
                
                 

                  if(this.checkPointData[this.i].Value.QC_Resource == "Pass" && this.service.get_Initial_QC_status() && this.service.get_Initial_QC_failed_status() && this.service.get_QC_Rework_failed_1())
                  {
                    this.checkPointData[this.i].Value.Developer_1 = this.checkPointData[this.i].Value.Developer;
                    this.checkPointData[this.i].Value.QC_Resource_1 = this.checkPointData[this.i].Value.QC_Resource;
                    this.checkPointData[this.i].Value.Comment_1 = this.checkPointData[this.i].Value.Comment;

                  }
                  else
                  {
                    this.checkPointData[this.i].Value.Developer_1 = savedUserData[this.j].Developer_1;
                    this.checkPointData[this.i].Value.QC_Resource_1 = savedUserData[this.j].QC_Resource_1;            
                    this.checkPointData[this.i].Value.Comment_1 = savedUserData[this.j].Comment_1;                
                  }
                 

                  this.checkColor( this.checkPointData[this.i].Value.Developer_1,"",this.checkPointData[this.i].Value.Check_Id);
                  this.checkColor( "",this.checkPointData[this.i].Value.QC_Resource_1,this.checkPointData[this.i].Value.Check_Id);


                  if(this.checkPointData[this.i].Value.QC_Resource_1 == "Pass" && this.service.get_QC_Rework_1() && this.service.get_Initial_QC_failed_status() && this.service.get_QC_Rework_failed_1())
                  {
                    this.checkPointData[this.i].Value.Developer_2 = this.checkPointData[this.i].Value.Developer_1;
                    this.checkPointData[this.i].Value.QC_Resource_2 = this.checkPointData[this.i].Value.QC_Resource_1;
                    this.checkPointData[this.i].Value.Comment_2 = this.checkPointData[this.i].Value.Comment_1;

                  }
                  else
                  {
                    this.checkPointData[this.i].Value.Developer_2 = savedUserData[this.j].Developer_2;
                    this.checkPointData[this.i].Value.QC_Resource_2 = savedUserData[this.j].QC_Resource_2;            
                    this.checkPointData[this.i].Value.Comment_2 = savedUserData[this.j].Comment_2;               
                  }
                 
                  this.checkColor( this.checkPointData[this.i].Value.Developer_2,"",this.checkPointData[this.i].Value.Check_Id);
                  this.checkColor( "",this.checkPointData[this.i].Value.QC_Resource_2,this.checkPointData[this.i].Value.Check_Id);
                
                }
             
           }         
         
       }
  }

  SavedUserData44()
  {
      this.i = 0;
      this.j = 0;
      for ( this.i = 0; this.i < this.checkPointData.length; this.i++)
      {    
                  this.checkPointData[this.i].Value.Developer = "";
                  this.checkPointData[this.i].Value.QC_Resource ="";            
                  this.checkPointData[this.i].Value.Comment = "";

                  this.checkPointData[this.i].Value.Developer_1 = "";
                  this.checkPointData[this.i].Value.QC_Resource_1 ="";            
                  this.checkPointData[this.i].Value.Comment_1 = "";

                  this.checkPointData[this.i].Value.Developer_2 = "";
                  this.checkPointData[this.i].Value.QC_Resource_2 ="";            
                  this.checkPointData[this.i].Value.Comment_2 = "";

       }
  }

  readyToSubmit = false;
  readyToSubmitDevelopoer = false;
  QCNumber = 0;
  Initial_QC = "";
  QC_Rework_1 = "";
  QC_Rework_2 = "";
  incompleteCheckPointNum ;
  incompleteCheckPointData
  isreadyToSubmit(Data1,Data2,checkpointNum,CheckpointData)
  {
    if( Data1 == null || Data2 == "" )
    {
        //dailogue.
        //this.readyToSubmit = false;  
        
        this.readyToSubmit = false;
    }
    else
    {
      this.readyToSubmit = true;
      this.QCNumber = 1;
     
    }
  }

  dataNum;
  SubmitCurrentData()
  {

    debugger;
      if(this.isDisabledDeveloper == false)  
      {
        for ( this.i = 0; this.i < this.checkPointData.length; this.i++)
        {
         
           if( this.checkPointData[this.i].Value.Developer == null || this.checkPointData[this.i].Value.Developer == "" )
              {
                  //dailogue.
                  //this.readyToSubmit = false;  
                  //this.DataSubmittedSuccessFully();
                  this.incompleteCheckPointData = this.checkPointData[this.i].Value.Check_Points;  
                  debugger;              
                  this.readyToSubmit = false;
                  break;
              }
              else
              {
                this.readyToSubmit = true;
                this.QCNumber = 1;
              }
           
        }
      }
      else if(this.isDisabledReviewer == false)
      {
        for ( this.i = 0; this.i < this.checkPointData.length; this.i++)
        {
            if( this.checkPointData[this.i].Value.QC_Resource == null || this.checkPointData[this.i].Value.QC_Resource == "" )
              {
                  //dailogue.
                  this.readyToSubmit = false;
                  this.incompleteCheckPointData = this.checkPointData[this.i].Value.Check_Points;

                  break;
              }
              else
              {
                this.readyToSubmit = true;
                this.QCNumber = 1;
              }
           
        }
      }
      else if(this.isDisabledDeveloper1 == false)
      {
        for ( this.i = 0; this.i < this.checkPointData.length; this.i++)
        {
            if( this.checkPointData[this.i].Value.Developer_1 == null || this.checkPointData[this.i].Value.Developer_1 == "" )
              {
                  //dailogue.
                 // this.readyToSubmit = false;
                 //this.DataSubmittedSuccessFully();
                 this.incompleteCheckPointData = this.checkPointData[this.i].Value.Check_Points;                
                 this.readyToSubmit = false;
                  break;
              }
              else
              {
                this.readyToSubmit = true;
                this.QCNumber = 2;
              }           
        }

      }
      else if(this.isDisabledReviewer1 == false)
      {
        for ( this.i = 0; this.i < this.checkPointData.length; this.i++)
        {
            if( this.checkPointData[this.i].Value.QC_Resource_1 == null || this.checkPointData[this.i].Value.QC_Resource_1 == "" )
              {
                  //dailogue.
                  this.readyToSubmit = false;
                  this.incompleteCheckPointData = this.checkPointData[this.i].Value.Check_Points;                
                  break;
              }
              else
              {
                this.readyToSubmit = true;
                this.QCNumber = 2;
              }
           
        }
      }
      else if(this.isDisabledDeveloper2 == false)
      {
        for ( this.i = 0; this.i < this.checkPointData.length; this.i++)
        {
            if( this.checkPointData[this.i].Value.Developer_2 == null || this.checkPointData[this.i].Value.Developer_2 == "" )
              {
                  //dailogue.
                  //this.readyToSubmit = false; 
                   this.incompleteCheckPointData = this.checkPointData[this.i].Value.Check_Points;                
                  this.readyToSubmit = false;
                  break;
              }
              else
              {
                this.readyToSubmit = true;
                this.QCNumber = 3;
              }           
        }

      }
      else if(this.isDisabledReviewer2 == false)
      {
        for ( this.i = 0; this.i < this.checkPointData.length; this.i++)
        {
            if( this.checkPointData[this.i].Value.QC_Resource_2 == null || this.checkPointData[this.i].Value.QC_Resource_2 == "" )
              {
                  //dailogue.
                  this.readyToSubmit = false;
                  this.incompleteCheckPointData = this.checkPointData[this.i].Value.Check_Points;                
                  break;
              }
              else
              {
                this.readyToSubmit = true;
                this.QCNumber = 3;
              }
        }
      }

      debugger;
      if(this.readyToSubmit )
      {

        if(this.isDisabledDeveloper == false || this.isDisabledDeveloper1 == false || this.isDisabledDeveloper2 == false)
        {
          this.DataSubmittedSuccessFully();
        }
        else
        {
          if(this.QCNumber == 1)
          {
              this.Initial_QC = 'submitted';
          }
          else if(this.QCNumber == 2 )
          {
              this.QC_Rework_1 = 'submitted';
          }
          else if(this.QCNumber == 3)
          {
            this.QC_Rework_2 = 'submitted';
          }
          this.service.SubmitSavedData(this.Initial_QC,this.QC_Rework_1,this.QC_Rework_2 ).subscribe((response) => {
            debugger;
            const result = response.json();
              if(result)
              {
                  this.DataSubmittedSuccessFully();
              }
              else
              {
                this.openDialogPleaseEnterAllCheckPoints( this.i+1)//,this.incompleteCheckPointData );
              }
                   // this.checkPointData = result; 
          }); 
        }

       }
      else
      {
        this.openDialogPleaseEnterAllCheckPoints(this.i+1)//,this.incompleteCheckPointData);
  
      }
  
  }

  disableReviewer(isDisabled)
  {
    debugger;
    this.isDisabledReviewer = isDisabled;
   // this.isDisabledDeveloper = false;
  }

  disableDeveloper(isDisabled)
  {
    debugger;
    this.isDisabledDeveloper = isDisabled;
  //  this.isDisabledReviewer = false;
  }

  disableComment(isDisabled)
  {
    debugger;
    this.isDisabledComment = isDisabled;
  //  this.isDisabledReviewer = false;
  }

  onFilterClick(event) {   

    debugger;
    switch(event)
    {
     
      case 'Client Folder' : this.selectButton("Client Folder") ;
        break;
      case 'TSO Task Manager' : this.selectButton("TSO Task Manager");
        break;
      case 'Installer' : this.selectButton("Installer");
        break;
      case 'Source Code' : this.selectButton("Source Code");
        break;
      case 'Miscellaneous Info' : this.selectMiscellaneous();
      break;
   

    }
  }

  changeColorOnRadioButtonClick(entry,position)
  {
     this.checkColor( entry,entry,position);
     this.checkColor( entry,entry,position);
     this.checkColor( entry,entry,position);

  }

   onSelectionChangeForDeveloper(entry,color,position) {
    debugger;   
    this.isValid =  this.service.validateData();
    this.changeColorOnRadioButtonClick(entry,position);  
    if(!this.isValid )
    {
      this.openDialog();
    }
   
    else
    {
      this.service.saveUserCheckPointData(position,entry,this.checkPointData[position-1].Value.Comment ).subscribe((response) => {
        debugger;
        const result = response.json();
        this.checkPointData[position-1].Value.Developer = entry;
        this.checkPointData[position-1].Value.Comment =this.checkPointData[position-1].Value.Comment;
               // this.checkPointData = result; 
        
      });      

    }
   
   } 

   onSelectionChangeForReviewer(entry,color,position) {
     
    debugger;
    this.isValid =  this.service.validateData();
    this.changeColorOnRadioButtonClick(entry,position);  

    if(!this.isValid)
    {
      this.openDialog();
    }
    else
    {
      this.service.saveUserCheckPointData(position,entry,this.checkPointData[position-1].Value.Comment ).subscribe((response) => {
        debugger;
        const result = response.json();
        this.checkPointData[position-1].Value.QC_Resource = entry;
        this.checkPointData[position-1].Value.Comment = this.checkPointData[position-1].Value.Comment;
       // this.checkPointData = result; 
      });       
    }
   
  }  

  selectButton(category)
  {
    debugger;
    this.flag = false;
    this.checkPointDataCategory = [];
    for ( this.i = 0; this.i < this.checkPointData.length; this.i++)
   {    
    
      while(this.checkPointData[this.i].Key  == category) 
        {
          
          this.checkPointDataCategory.push(this.checkPointData[this.i].Value);          
          this.flag = true;
           this.checkColor( this.checkPointData[this.i].Value.Developer,"",this.checkPointData[this.i].Value.Check_Id);
           this.checkColor( "",this.checkPointData[this.i].Value.QC_Resource,this.checkPointData[this.i].Value.Check_Id);
          
           this.checkColor( this.checkPointData[this.i].Value.Developer_1,"",this.checkPointData[this.i].Value.Check_Id);
           this.checkColor("",this.checkPointData[this.i].Value.QC_Resource_1,this.checkPointData[this.i].Value.Check_Id);
         
           this.checkColor( this.checkPointData[this.i].Value.Developer_2,"",this.checkPointData[this.i].Value.Check_Id);
           this.checkColor( "",this.checkPointData[this.i].Value.QC_Resource_2,this.checkPointData[this.i].Value.Check_Id);
           this.i++
          //var selection = document.getElementsByName("1");
         // var selection = document.getElementsByName("7");
          //$(selection).css("background-color", "green");  
        }
        if(this.flag == true)
        {
          break;
        }
    }
  }

  selectMiscellaneous()
  {
    debugger;
    this.flag = false;
    this.checkPointDataCategory = [];
    for ( this.i = 0; this.i < this.checkPointData.length; this.i++)
   {    
      if(this.checkPointData[this.i].Key  == "Miscellaneous Info") 
        {
          this.checkPointDataCategory.push(this.checkPointData[this.i].Value);
          this.checkColor( this.checkPointData[this.i].Value.Developer,"",this.checkPointData[this.i].Value.Check_Id);
           this.checkColor( "",this.checkPointData[this.i].Value.QC_Resource,this.checkPointData[this.i].Value.Check_Id);
          
           this.checkColor( this.checkPointData[this.i].Value.Developer_1,"",this.checkPointData[this.i].Value.Check_Id);
           this.checkColor("",this.checkPointData[this.i].Value.QC_Resource_1,this.checkPointData[this.i].Value.Check_Id);
         
           this.checkColor( this.checkPointData[this.i].Value.Developer_2,"",this.checkPointData[this.i].Value.Check_Id);
           this.checkColor( "",this.checkPointData[this.i].Value.QC_Resource_2,this.checkPointData[this.i].Value.Check_Id);

        }
      
    }
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent);

    dialogRef.afterClosed().subscribe(result => {

      console.log('The dialog was closed');
     
    });
  }

  openDialogPleaseEnterAllCheckPoints(CheckPointNum): void {
    debugger;
    let dialogRef = this.dialog.open(PleaseEnterAllCheckPointsComponent,
      {
        data : CheckPointNum,         
        
      });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }

  DataSubmittedSuccessFully(): void {
    let dialogRef = this.dialog.open(DataSubmittedSuccessfullyComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }

  openDialogPleaseEnterComment(): void {
    let dialogRef = this.dialog.open(PleaseEnterCommentComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }

  
    /////////////////////////////////////////////// 1st QC Rework/////////////////////////////////////////////////////////////


    isDisabledDeveloper1 = true;
    isDisabledReviewer1 = true ;
    id1={};
    color1="";
    index1 = 1;
    flag1  = false; 
    checkPointData1:any[];
    checkPointDataCategory1 : any = [];  
    checkPointcategory1 = {};
    i1:number = 0;
    j1 :number = 0;
    checkedValues1 = {};
    UserComment1 = "";
    isValid1 :boolean ;
    isDisabledComment1 = true;
    entriesDeveloper1 = [
      {
        id : '11',
        description: 'Pass',
        color: '#c9ffe2'
      },
      {
       id : '12',
       description: 'Fail ',
       color: '#ffc9c9'
  
     },
     {
      id : '13',
      description: 'N/A ',
      color: ''
    },
    ]
  
    entriesReviewer1 = [
      {
        id : 'A1',
        description: 'Pass',
        color: '#c9ffe2'
      },
      {
       id : 'B1',
       description: 'Fail ',
       color: '#ffc9c9'
  
     },
     {
      id : 'C1',
      description: 'N/A ',
      color: ''
    },
    ]
  
     selectedEntry1;
  
     onkey(checkId,commentPointData)
     {
        if(this.isDisabledDeveloper == false || this.isDisabledReviewer == false)
        {
          debugger;
          this.service.saveUserCommentData(checkId,commentPointData).subscribe((response) => {
            debugger;
            const result = response.json();
            // this.checkPointData = result; 
          });
        }
        else if(this.isDisabledDeveloper1 == false || this.isDisabledReviewer1 == false)
        {
          debugger;
          this.service.saveUserCommentData1(checkId,commentPointData).subscribe((response) => {
           
            const result = response.json();
            // this.checkPointData = result; 
          });
        }
        else if(this.isDisabledDeveloper2 == false || this.isDisabledReviewer2 == false)
        {
          debugger;
          this.service.saveUserCommentData2(checkId,commentPointData).subscribe((response) => {
            debugger;
            const result = response.json();
            // this.checkPointData = result; 
          });
        }
     

     }
  
    disableReviewer1(isDisabled)
    {
      debugger;
      this.isDisabledReviewer1 = isDisabled;
   //   this.isDisabledDeveloper1 = false;
    }
  
    disableDeveloper1(isDisabled)
    {
      debugger;
      this.isDisabledDeveloper1 = isDisabled;
     // this.isDisabledReviewer = false;
    }

    disableComment1(isDisabled)
    {
      debugger;
      this.isDisabledComment1 = isDisabled;
     // this.isDisabledReviewer = false;
    }

    onFilterClick1(event) {   
  
      debugger;
      switch(event)
      {       
        case 'Client Folder' : this.selectButton1("Client Folder") ;
          break;
        case 'TSO Task Manager' : this.selectButton1("TSO Task Manager");
          break;
        case 'Installer' : this.selectButton1("Installer");
          break;
        case 'Source Code' : this.selectButton1("Source Code");
          break;
        case 'Miscellaneous Info' : this.selectMiscellaneous1();
        break;
      }
    }
  

     onSelectionChangeForDeveloper1(entry,color,position,selectedId) {
      debugger;   
      this.isValid1 =  this.service.validateData();
      this.changeColorOnRadioButtonClick(entry,position);  

      if(!this.isValid1 )
      {
        this.openDialog1();
      }
      // else if(this.checkPointData[position-1].Value.Comment == "" || this.checkPointData[position-1].Value.Comment == null)
      // {
      //     this.openDialogPleaseEnterComment();
      // }      
      else
      {
        this.service.saveUserCheckPointData1(position,entry,this.checkPointData[position-1].Value.Comment_1 ).subscribe((response) => {
          debugger;
          const result = response.json();
          this.checkPointData[position-1].Value.Developer_1 = entry;
          this.checkPointData[position-1].Value.Comment_1 =this.checkPointData[position-1].Value.Comment_1;
                 // this.checkPointData = result; 
        });      
  
      }
     
     } 
  
     onSelectionChangeForReviewer1(entry,color,position) {
       
      debugger;
      this.isValid1 =  this.service.validateData();
      this.changeColorOnRadioButtonClick(entry,position);  

      if(!this.isValid1)
      {
        this.openDialog1();
      }
      else
      {
        this.service.saveUserCheckPointData1(position,entry,this.checkPointData[position-1].Value.Comment_1 ).subscribe((response) => {
          debugger;
          const result = response.json();
          this.checkPointData[position-1].Value.QC_Resource_1 = entry;
          this.checkPointData[position-1].Value.Comment_1 = this.checkPointData[position-1].Value.Comment_1;
         // this.checkPointData = result; 
        });       
      }
     
    }  
  
    selectButton1(category)
    {
      debugger;
      this.flag1 = false;
      this.checkPointDataCategory1 = [];
      for ( this.i1 = 0; this.i1 < this.checkPointData1.length; this.i1++)
     {    
      
        while(this.checkPointData1[this.i1].Key  == category) 
          {
              this.checkPointDataCategory1.push(this.checkPointData1[this.i1].Value);
            this.i1++
            this.flag1 = true;         
          }
          if(this.flag1 == true)
          {
            break;
          }
      }
    }
  
    selectMiscellaneous1()
    {
      debugger;
      this.flag1 = false;
      this.checkPointDataCategory1 = [];
      for ( this.i1 = 0; this.i1 < this.checkPointData1.length; this.i1++)
     {    
        if(this.checkPointData1[this.i].Key  == "Miscellaneous Info") 
          {
            this.checkPointDataCategory1.push(this.checkPointData1[this.i].Value);
           
          }
      }
    }
  
    openDialog1(): void {
      let dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent);
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
       
      });
    }
  
    openDialogPleaseEnterComment1(): void {
      let dialogRef = this.dialog.open(PleaseEnterCommentComponent);
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
       
      });
    }

    ////////////////////////////////////////////////2nd_QC_Rework/////////////////////////////////////////////////

    
    isDisabledDeveloper2 = true;
    isDisabledReviewer2 = true ;
    id2={};
    color2="";
    index2 = 1;
    flag2  = false; 
    checkPointData2:any[];
    checkPointDataCategory2 : any = [];  
    checkPointcategory2 = {};
    i2:number = 0;
    j2 :number = 0;
    checkedValues2 = {};
    UserComment2 = "";
    isValid2 :boolean ;
    isDisabledComment2 = true;
  
    entriesDeveloper2 = [
      {
        id : '21',
        description: 'Pass',
        color: '#c9ffe2'
      },
      {
       id : '22',
       description: 'Fail ',
       color: '#ffc9c9'
  
     },
     {
      id : '23',
      description: 'N/A ',
      color: ''
    },
    ]
  
    entriesReviewer2 = [
      {
        id : 'A2',
        description: 'Pass',
        color: '#c9ffe2'
      },
      {
       id : 'B2',
       description: 'Fail ',
       color: '#ffc9c9'
  
     },
     {
      id : 'C2',
      description: 'N/A ',
      color: ''
    },
    ]
  
     selectedEntry2;
  
  
    disableReviewer2(isDisabled)
    {
      debugger;
      this.isDisabledReviewer2 = isDisabled;
   //   this.isDisabledDeveloper2 = false;
    }
  
    disableDeveloper2(isDisabled)
    {
      debugger;
      this.isDisabledDeveloper2 = isDisabled;
     // this.isDisabledReviewer = false;
    }

    disableComment2(isDisabled)
    {
      debugger;
      this.isDisabledComment2 = isDisabled;
     // this.isDisabledReviewer = false;
    }

    onFilterClick2(event) {   
  
      debugger;
      switch(event)
      {       
        case 'Client Folder' : this.selectButton2("Client Folder") ;
          break;
        case 'TSO Task Manager' : this.selectButton2("TSO Task Manager");
          break;
        case 'Installer' : this.selectButton2("Installer");
          break;
        case 'Source Code' : this.selectButton2("Source Code");
          break;
        case 'Miscellaneous Info' : this.selectMiscellaneous2();
        break;
      }
    }
  
     onSelectionChangeForDeveloper2(entry,color,position) {
      debugger;   
      this.isValid2 =  this.service.validateData();
      this.changeColorOnRadioButtonClick(entry,position);  

      if(!this.isValid2 )
      {
        this.openDialog2();
      }
      // else if(this.checkPointData[position-2].Value.Comment == "" || this.checkPointData[position-2].Value.Comment == null)
      // {
      //     this.openDialogPleaseEnterComment();
      // }
      else
      {
        this.service.saveUserCheckPointData2(position,entry,this.checkPointData[position-1].Value.Comment_2 ).subscribe((response) => {
          debugger;
          const result = response.json();
          this.checkPointData[position-1].Value.Developer_2 = entry;
          this.checkPointData[position-1].Value.Comment_2 =this.checkPointData[position-1].Value.Comment_2;
                 // this.checkPointData = result; 
        });      
  
      }
     
     } 
  
     onSelectionChangeForReviewer2(entry,color,position) {
       
      debugger;
      this.isValid2 =  this.service.validateData();
      this.changeColorOnRadioButtonClick(entry,position);  

      if(!this.isValid2)
      {
        this.openDialog2();
      }
      else
      {
        this.service.saveUserCheckPointData2(position,entry,this.checkPointData[position-1].Value.Comment_2 ).subscribe((response) => {
          debugger;
          const result = response.json();
          this.checkPointData[position-1].Value.QC_Resource_2 = entry;
          this.checkPointData[position-1].Value.Comment_2 = this.checkPointData[position-1].Value.Comment_2;
         // this.checkPointData = result; 
        });       
      }
     
    }  
  
    selectButton2(category)
    {
      debugger;
      this.flag2 = false;
      this.checkPointDataCategory2 = [];
      for ( this.i2 = 0; this.i2 < this.checkPointData2.length; this.i2++)
     {    
      
        while(this.checkPointData2[this.i2].Key  == category) 
          {
              this.checkPointDataCategory2.push(this.checkPointData2[this.i2].Value);
            this.i2++
            this.flag2 = true;
          }
          if(this.flag2 == true)
          {
            break;
          }
      }
    }
  
    selectMiscellaneous2()
    {
      debugger;
      this.flag2 = false;
      this.checkPointDataCategory2 = [];
      for ( this.i2 = 0; this.i2 < this.checkPointData2.length; this.i2++)
     {    
        if(this.checkPointData2[this.i].Key  == "Miscellaneous Info") 
          {
            this.checkPointDataCategory2.push(this.checkPointData2[this.i].Value);
           
          }
        
      }
    }
  
    openDialog2(): void {
      let dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent);
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
       
      });
    }
  
    openDialogPleaseEnterComment2(): void {
      let dialogRef = this.dialog.open(PleaseEnterCommentComponent);
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
       
      });
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////
    
    GoPrevious()
    {

    }

    GoNext()
    { 
        
    }
  
}


