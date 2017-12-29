import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MobxAngularModule } from 'mobx-angular';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { 
  MatToolbarModule,
  MatCardModule,
  MatButtonModule 
} from '@angular/material';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GameComponent } from './game/game.component';
import { ScoreComponent } from './score/score.component';
import { CellComponent } from './cell/cell.component';
import { ControlsComponent } from './controls/controls.component';
import { BoardComponent } from './board/board.component';


@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    ScoreComponent,
    CellComponent,
    ControlsComponent,
    BoardComponent
  ],
  imports: [
    environment.production ? ServiceWorkerModule.register('ngsw-worker.js') : [],
    BrowserModule,
    FormsModule,
	BrowserAnimationsModule,
    HttpModule,
	MatToolbarModule,
    MobxAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
