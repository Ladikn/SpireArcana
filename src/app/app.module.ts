import { TimeService } from './time.service';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatExpansionModule,
    MatDialogModule,
    MatProgressBarModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { ForestRouteComponent } from './forest-route/forest-route.component';
import { TowerRouteComponent } from './tower-route/tower-route.component';

const appRoutes: Routes = [
    { path: 'forest', component: ForestRouteComponent },
    { path: 'tower', component: TowerRouteComponent },
    { path: '',
      redirectTo: '/forest',
      pathMatch: 'full'
    },
    { path: '**', component: ForestRouteComponent }
];

@NgModule({
    declarations: [AppComponent, ForestRouteComponent, TowerRouteComponent],
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
        ),
        BrowserModule,
        FlexLayoutModule,
        BrowserAnimationsModule,
        MatSidenavModule,
        MatListModule,
        MatButtonModule,
        MatToolbarModule,
        MatGridListModule,
        MatCardModule,
        MatExpansionModule,
        MatDialogModule,
        MatProgressBarModule
    ],
    providers: [TimeService],
    bootstrap: [AppComponent]
})
export class AppModule {}
