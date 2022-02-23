import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { SharedService } from './myShared.service';
import { Component3Component } from './component3/component3.component';
import { Component4Component } from './component4/component4.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    Component3Component,
    Component4Component,
  ],
  bootstrap: [AppComponent],
  providers: [SharedService],
})
export class AppModule {}
