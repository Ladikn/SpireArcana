import { Component } from '@angular/core';
import { MainLoopService } from './services/main-loop.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'app';

  constructor(loop: MainLoopService) {
    loop = new MainLoopService();
    loop.broadcast.subscribe(i => console.log(i));
  }

  private location = 'Forest';

}
