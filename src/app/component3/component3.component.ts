import { Component } from '@angular/core';
import { SharedService } from '../myShared.service';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css'],
})
export class Component3Component {
  myNum = 0;
  myName = 'bjb';
  myCity = 'vhvh';

  constructor(private sharedService: SharedService) {}

  sendChanges(myNum, myName, myCity) {
    this.sharedService.customChangeDetector.next(myNum);
    this.sharedService.customChangeDetector1.next(myName);
    this.sharedService.customChangeDetector2.next(myCity);
  }
}
