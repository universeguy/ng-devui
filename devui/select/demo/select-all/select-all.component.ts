import { Component } from '@angular/core';
@Component({
  selector: 'd-select-all',
  templateUrl: './select-all.component.html',
})
export class SelectAllComponent {
  options = [
    'Option 1',
    'Option 2',
    'Option 3',
    'Option 4',
    'Option 5',
    'Option 6',
    'Option 7',
    'Option 8',
    'Option 9',
    'Option 10',
    'Option 11',
    'Option 12',
    'Option 13',
    'Option 14',
  ];
  select = ['Option 8', 'Option 3'];
}
