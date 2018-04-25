import { Component, OnInit } from '@angular/core';
import { MainLoopService } from '../../services/main-loop.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-forest',
  templateUrl: './forest.component.html',
  styleUrls: ['./forest.component.sass']
})
export class ForestComponent implements OnInit {

  constructor(tick: MainLoopService) {
    tick = new MainLoopService();
    tick.broadcast.subscribe();
  }

  ngOnInit() {
  }

}
