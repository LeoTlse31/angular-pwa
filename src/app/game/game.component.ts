import {BrowserModule} from '@angular/platform-browser'
import { NgModule} from '@angular/core'
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MobxAngularModule } from 'mobx-angular';
import { GameService } from '../game.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {MatToolbarModule} from '@angular/material';

@Component({
  selector: 'ttt-game',
  templateUrl: './game.component.html',
  styles: [],
  providers: [GameService]
})
export class GameComponent  {

}
