import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {defineCustomElements} from "@my-workspace/web-components/loader";
import { MyComponent } from '../generated/directives/proxies';

defineCustomElements(window);

@NgModule({
  imports: [CommonModule],
  exports: [
    MyComponent
  ],
  declarations: [
    MyComponent
  ]
})
export class WebComponentsAngularModule {}
