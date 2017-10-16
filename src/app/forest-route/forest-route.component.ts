import { Observable, Subscription } from 'rxjs/Rx';
import { TimeService } from '../time.service';
import { Component } from '@angular/core';

@Component({
    selector: 'app-forest-route',
    templateUrl: './forest-route.component.html',
    styleUrls: ['./forest-route.component.scss']
})
export class ForestRouteComponent {
    exploring = false;
    progress = 0;

    tick: Subscription;

    exploreForest() {
        this.exploring = true;
        this.tick = this.timeService.tick.subscribe(x => {
            this.progress = x * 2;
            console.log(this.progress);
            if (this.progress > 100) {
                this.progress = 0;
                this.exploring = false;
                this.tick.unsubscribe();
            }
        });
        console.log('exploring');
    }

    constructor(private timeService: TimeService) {
    }
}
