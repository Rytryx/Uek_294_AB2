import { Directive, Input, ViewContainerRef, TemplateRef, EmbeddedViewRef } from '@angular/core';

@Directive({
  selector: '[appRange]'
})
export class RangeDirective {
  constructor(private viewContainer: ViewContainerRef, private templateRef: TemplateRef<any>) {}

  @Input() set appRange(range: number[]) {
    this.viewContainer.clear();
    range.forEach(num => {
      this.viewContainer.createEmbeddedView(this.templateRef, { $implicit: num });
    });
  }
}
