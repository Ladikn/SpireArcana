import { Component, OnInit } from '@angular/core';
import { MainLoopService } from '../../services/main-loop.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { MainCharacter } from '../../classes/main-character';

@Component({
  selector: 'app-forest',
  templateUrl: './forest.component.html',
  styleUrls: ['./forest.component.sass']
})
export class ForestComponent implements OnInit {

  private tick: MainLoopService;
  private exploring: number;

  constructor(tick: MainLoopService, mc: MainCharacter) {
    tick = new MainLoopService();
    this.tick = tick;
  }

  ngOnInit() {
    this.exploring = 0;
  }

  private explore() {
    let subscription = this.tick.broadcast
      .subscribe((x) => {
        this.exploring += 10;
        if (this.exploring >= 100) {
          subscription.unsubscribe();
          this.exploring = 0;
        }
      });
  }
}
