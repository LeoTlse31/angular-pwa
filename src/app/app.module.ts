import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { 
  MatToolbarModule,
  MatCardModule,
  MatButtonModule 
} from '@angular/material';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BoardComponent } from './presentation/board/board.component';
import { CellComponent } from './presentation/cell/cell.component'

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    CellComponent
  ],
  imports: [
    BrowserModule,
    environment.production ? ServiceWorkerModule.register('ngsw-worker.js') : [],
    MatToolbarModule,
    MatCardModule,
	ReactiveFormsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
