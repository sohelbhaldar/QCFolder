import { Component, OnInit } from '@angular/core';


export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-data-created-success-fully',
  templateUrl: './data-created-success-fully.component.html',
})
export class DataCreatedSuccessFullyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
