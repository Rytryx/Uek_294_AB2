import { Component, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { AccordionElementComponent } from './accordion-element.component';

@Component({
  selector: 'pg-accordion-wrapper',
  template: `
    <div>
      <ng-content></ng-content>
    </div>
  `,
})
export class AccordionWrapperComponent implements AfterContentInit {
  @ContentChildren(AccordionElementComponent) accElements!: QueryList<AccordionElementComponent>;

  ngAfterContentInit(): void {
    this.accElements.toArray().forEach(element => {
      element.toggleAccordion.subscribe(() => {
        this.toggleAccordionElement(element);
      });
    });
  }

  toggleAccordionElement(clickedAccordionElement: AccordionElementComponent): void {
    this.accElements.toArray().forEach(element => {
      if (element !== clickedAccordionElement) {
        element.isVisible = false;
      }
    });
  }
}
