import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  
})
export class HomePageComponent implements OnInit {

  constructor() { }

  lable ="Code Review";
  flag = false;


  changeToQC()
  {
     this.lable = "Quality Check Sheet"
    
  }
  yourFn(event){
   
    if(event.tab.textLabel == "QC")
    {
      this.lable = "Quality Check Sheet"
      var buttons = document.getElementsByName("Client Folder");
      $(buttons).css("background-color", "white"); 
    $(buttons).css("color", "black"); 
    }
    else if(event.tab.textLabel == "Code Review")
    {
      this.lable = "Code Review"
    }
} 

  ngOnInit() {
  }


}
