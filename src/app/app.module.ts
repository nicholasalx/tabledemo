import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MdButtonModule, MdCheckboxModule, MdTableModule, MdPaginatorModule, MdSortModule} from '@angular/material';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MdButtonModule, 
    MdCheckboxModule,
    MdTableModule,
    MdPaginatorModule,
    MdSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
