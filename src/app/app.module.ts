import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {MatGridListModule } from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule}  from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { BetDialogComponent } from './bet-dialog/bet-dialog.component';
import { BetTableComponent } from './bet-table/bet-table.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    BetDialogComponent,
    BetTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
