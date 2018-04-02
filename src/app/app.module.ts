import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RichtextComponent } from './richtext/richtext.component';
import {app_rountig} from "./app.routes";
import { ToolsFilterPipe } from './home/tools-filter.pipe';
import { StrategyFilterPipe } from './home/strategy-filter.pipe';

import {HttpClientModule} from '@angular/common/http';
import { EditToolComponent } from './tools/edit/editTool.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { APP_CONFIG, CONECTATE_CONFIG } from './app.config';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolsFilterPipe,
    StrategyFilterPipe,
    RichtextComponent, 
    EditToolComponent,
    TutorialComponent
  ],
  imports: [
    BrowserModule,
    app_rountig,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: APP_CONFIG, useValue: CONECTATE_CONFIG }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
