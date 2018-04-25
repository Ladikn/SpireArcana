import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatExpansionModule,
  MatProgressBarModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { MainLoopService } from './services/main-loop.service';
import { ForestComponent } from './locations/forest/forest.component';


@NgModule({
  declarations: [
    AppComponent,
    ForestComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatExpansionModule,
    MatProgressBarModule,
    RouterModule.forRoot([
        { path: '', redirectTo: 'forest', pathMatch: 'full' },
        { path: 'forest', component: ForestComponent },
        { path: '**', redirectTo: 'forest' }
    ])
  ],
  providers: [
    MainLoopService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
