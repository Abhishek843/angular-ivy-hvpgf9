import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {Pseudo3dCarouselComponent}from './pseudo-3d-carousel/pseudo-3d-carousel.component'

@NgModule({
  imports:      [ BrowserModule, FormsModule,BrowserAnimationsModule ],
  declarations: [ AppComponent,Pseudo3dCarouselComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
