import { Component, ViewChild } from '@angular/core';





@Component({
  selector: 'app-branchreg',
  templateUrl: './branchreg.component.html',
  styleUrls: ['./branchreg.component.css']
})
export class BranchregComponent {
  hideDivOne: boolean;



  ngOnInit() {
    this.hideDivOne = true;


  }

  showDivTab(){
    this.hideDivOne = false;

  }
  hideDivTab(){
    this.hideDivOne = true;

  }

  
}