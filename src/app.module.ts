import {
    NgModule,
    CUSTOM_ELEMENTS_SCHEMA,
  } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
  import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';

  
  @NgModule({
    declarations: [AppComponent],
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      CommonModule,
      HttpClientModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
  })
  export class AppModule {}
  