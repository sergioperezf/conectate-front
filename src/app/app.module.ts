import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {app_rountig} from "./app.routes";
import { ToolsFilterPipe } from './home/tools-filter.pipe';
import { StrategyFilterPipe } from './home/strategy-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolsFilterPipe,
    StrategyFilterPipe
  ],
  imports: [
    BrowserModule,
    app_rountig,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
