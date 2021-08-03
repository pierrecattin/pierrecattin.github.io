import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {MatGridListModule } from '@angular/material/grid-list';


import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { BetDialogComponent } from './bet-dialog/bet-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    BetDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
