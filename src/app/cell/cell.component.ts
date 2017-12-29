import {BrowserModule} from '@angular/platform-browser'
import { NgModule} from '@angular/core'
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MobxAngularModule } from 'mobx-angular';
import { GameService } from '../game.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ttt-cell',
  templateUrl: './cell.component.html',
  styles: [
    '.next-value {transition: 200ms ease opacity; opacity: 0}',
    '.cell-content:hover .next-value {opacity: 0.3}'
  ]
})
export class CellComponent  {
  @Input() value:string;
  @Input() nextValue:string;
  @Output() select:EventEmitter<any> = new EventEmitter<any>();

}