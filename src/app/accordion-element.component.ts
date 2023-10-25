import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pg-accordion-element',
  template: `
    <div>
      <h2 (click)="toggleAccordion.emit()">{{title}}</h2>
      <div *ngIf="isVisible">
        <ng-content></ng-content>
      </div>
    </div>
  `,
})
export class AccordionElementComponent {
  @Input() title: string;
  @Input() isVisible: boolean = false;
  @Output() toggleAccordion: EventEmitter<void> = new EventEmitter<void>();
}
