import { Component, OnInit,Inject } from '@angular/core';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-dialog-overview-example-dialog',
  templateUrl: './dialog-overview-example-dialog.component.html',
 
})
export class DialogOverviewExampleDialogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
