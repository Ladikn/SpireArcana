import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class MainLoopService {

  constructor() {
    this.start();
  }

  private tick = 0;

  private tower = new Subject();
  public broadcast = this.tower.asObservable();

  public start() {
    window.setInterval(() => {
      this.tick++;
      this.tower.next(this.tick);
    }, 100);
  }
}
