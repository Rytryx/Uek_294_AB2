import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dein-projektname';
  values = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

  public range(start: number, end: number): number[] {
    let tempArray = new Array(end - start + 1).fill(0).map((_, index) => start + index);
    return tempArray;
  }
}
