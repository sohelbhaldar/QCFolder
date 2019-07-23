import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CheckPointsComponent } from '../CheckPoints/check-points/check-points.component';
import { CheckPointData } from './data-Interface';

@Component({
  selector: 'app-please-enter-all-check-points',
  templateUrl: './please-enter-all-check-points.component.html',
  styleUrls: ['./please-enter-all-check-points.component.css']
})
export class PleaseEnterAllCheckPointsComponent implements OnInit {

 // data1 : CheckPointData[]
  constructor(public checkPointData:  MatDialogRef<CheckPointsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any[]) {      
      // this.data1 = this.data;
      debugger;

     }

  ngOnInit() {
  }

}
