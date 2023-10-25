import { Directive, Input, TemplateRef, ViewContainerRef, OnInit } from '@angular/core';

@Directive({
  selector: '[pgDelay]'
})
export class DelayDirective implements OnInit {
  @Input() set pgDelay(delay: number) {
    this.delay = delay;
  }

  private delay: number = 0;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }, this.delay);
  }
}
