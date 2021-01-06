import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { defineCustomElements } from '@my-workspace/web-components/loader';

defineCustomElements(window);

@NgModule({
  imports: [CommonModule],
})
export class WebComponentsAngularModule {}
