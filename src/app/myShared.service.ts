import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class SharedService {
  myShareVar = 'Test';

  customChangeDetector = new Subject<string>();
  customChangeDetector$ = this.customChangeDetector.asObservable();
  customChangeDetector1 = new Subject<string>();
  customChangeDetector1$ = this.customChangeDetector1.asObservable();
  customChangeDetector2 = new Subject<string>();
  customChangeDetector2$ = this.customChangeDetector2.asObservable();

  constructor() {}
}
