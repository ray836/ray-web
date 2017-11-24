import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChallengesComponent } from './challenges/challenges.component';
import { HomeComponent } from './home/home.component';
import {routing} from "./app.routing";

@NgModule({
  declarations: [
    AppComponent,
    ChallengesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
