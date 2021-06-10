import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { Ng5SliderModule } from 'ng5-slider';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PagesRoutingModule,
    Ng5SliderModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PagesModule { }
