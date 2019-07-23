import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { QcTabComponent } from '../QCTab/qc-tab/qc-tab.component';

@Component({
  selector: 'app-previous-qcfailed',
  templateUrl: './previous-qcfailed.component.html',
  styleUrls: ['./previous-qcfailed.component.css']
})
export class PreviousQCFailedComponent implements OnInit {

  // constructor()
  // {
    
  // }
  constructor(public checkPointData:  MatDialogRef<QcTabComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any[]) {
      debugger;
     }

  ngOnInit() {
  }

}
