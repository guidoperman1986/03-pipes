import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LOCALE_ID } from "@angular/core";

import { CapitalizadoPipe } from "./pipes/capitalizado.pipe";

import { AppComponent } from './app.component';
//{ provide: LOCALE_ID, useValue: "es" }
@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
