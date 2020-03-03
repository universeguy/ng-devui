import { Component, ChangeDetectionStrategy, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'd-cell-edit',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTableCellEditTmplComponent {

  @ContentChild(TemplateRef, { static: true }) template: TemplateRef<any>;

  dataPicker;
}
