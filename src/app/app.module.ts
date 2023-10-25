import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { AccordionWrapperComponent } from './accordion-wrapper.component';
import { AccordionElementComponent } from './accordion-element.component';

@NgModule({
  declarations: [
    AppComponent,
    AccordionWrapperComponent,
    AccordionElementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

