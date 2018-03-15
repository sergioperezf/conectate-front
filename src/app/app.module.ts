import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {app_rountig} from "./app.routes";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    app_rountig
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
