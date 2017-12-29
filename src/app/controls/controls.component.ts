import {BrowserModule} from '@angular/platform-browser'
import { NgModule} from '@angular/core'
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MobxAngularModule } from 'mobx-angular';
import { GameService } from '../game.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ttt-controls',
  templateUrl: './controls.component.html',
  styles: []
})
export class ControlsComponent  {

  constructor(private game:GameService) { }

}
