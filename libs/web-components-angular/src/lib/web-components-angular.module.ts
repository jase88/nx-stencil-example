import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {defineCustomElements} from "../../../../dist/libs/web-components/loader";
import {MyComponent} from "../../../../dist/libs/web-components/......libsweb-components-angular/src/generated/directives/proxies";
// import { defineCustomElements } from '@my-workspace/web-components/loader';

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
