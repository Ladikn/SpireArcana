import { Component } from '@angular/core';
import { MainLoopService } from './services/main-loop.service';
import { MainCharacter } from './classes/main-character';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'app';

  constructor(loop: MainLoopService) {
    loop = new MainLoopService();
    loop.broadcast.subscribe();

    console.log(this.MainCharacter);
  }

  private location = 'Forest';
  public MainCharacter: MainCharacter = new MainCharacter();

}
