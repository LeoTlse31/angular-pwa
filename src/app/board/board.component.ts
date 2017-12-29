import {BrowserModule} from '@angular/platform-browser'
import { NgModule} from '@angular/core'
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MobxAngularModule } from 'mobx-angular';
import { GameService } from '../game.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ttt-board',
  templateUrl: './board.component.html',
  styles: []
})
export class BoardComponent  {
  constructor(private game:GameService) { }

  playCell(i, j) {
    if (this.game.board[i][j]) {
      alert('Please choose an empty cell!');
    }
    else {
      this.game.play(i,j);
    }
  }
}