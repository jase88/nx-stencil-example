import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {WebComponentsAngularModule} from "@my-workspace/web-components-angular";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, WebComponentsAngularModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
