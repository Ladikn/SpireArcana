import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class TimeService {

  public tick = Observable.interval(100);

}
