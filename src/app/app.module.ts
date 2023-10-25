// app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AccordionWrapperComponent } from './accordion-wrapper.component';
import { AccordionElementComponent } from './accordion-element.component';
import { DelayDirective } from './delay.directive';
import { RangeDirective } from './range.directive';

@NgModule({
  declarations: [
    AppComponent,
    AccordionWrapperComponent,
    AccordionElementComponent,
    DelayDirective,
    RangeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
