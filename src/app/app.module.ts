import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatToolbarModule
} from '@angular/material';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatSidenavModule,
        MatListModule,
        MatButtonModule,
        MatToolbarModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
