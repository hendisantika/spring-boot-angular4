import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CandidateInsertComponent } from './candidate-insert/candidate-insert.component';
import {CandidateService} from "../services/candidate.service";

@NgModule({
  declarations: [
    AppComponent,
    CandidateInsertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CandidateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
