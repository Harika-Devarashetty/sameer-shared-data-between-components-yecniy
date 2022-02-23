import { Component } from '@angular/core';
import { SharedService } from '../myShared.service';

@Component({
  selector: 'app-component4',
  templateUrl: './component4.component.html',
  styleUrls: ['./component4.component.css'],
})
export class Component4Component {
 
  myNum = 0;
  myName = 'bjb';
  myCity = 'vhvh';

  constructor(private sharedService: SharedService) {
    this.sharedService.customChangeDetector$.subscribe((data: any) => {
      this.myNum = data;
    });
    this.sharedService.customChangeDetector1$.subscribe((data: any) => {
      this.myName = data;
    });
    this.sharedService.customChangeDetector2$.subscribe((data: any) => {
      this.myCity = data;
    });
  }
}
