import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { 
  MatToolbarModule,
  MatCardModule,
  MatSnackBar,
  MatGridListModule,
  MatButtonModule 
} from '@angular/material';

import { AppComponent } from './app.component';
import { ToDoComponent } from './to-do/to-do.component';
import { TodoService } from './to-do/to-do.service';
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent
  ],
  imports: [
    BrowserModule,
    environment.production ? ServiceWorkerModule.register('ngsw-worker.js') : [],
    MatToolbarModule,
    MatCardModule,
	ReactiveFormsModule,
	MatGridListModule,
    MatButtonModule,
	FormsModule,
    HttpModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
