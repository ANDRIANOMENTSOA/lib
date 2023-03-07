import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ng-signature',
  templateUrl: './ng-signature.component.html',
  styleUrls: ['./ng-signature.scss'],
})
export class NgSignatureComponent {
  @Input() points: any[] = [];
  @Output() pointsChange = new EventEmitter<any>();

  @Input() editable = true;
  @Input() emitOnDragEnd = false;

  @Input() penColor = 'black';
  @Input() backgroundColor = 'transparent';

  @Input() showDoneButton = true;
  @Input() doneButtonText = 'Done';
  @Input() doneButtonClass = 'btn btn-primary';
  @Input() showClearButton = true;
  @Input() clearButtonText = 'Clear';
  @Input() clearButtonClass = 'btn btn-default';

  @Input() format: 'blob' | 'base64' | 'json' = 'blob';

  @Input() height = 150;
  @Input() width = 600;

  @Output() done = new EventEmitter();
  @Output() cleared = new EventEmitter();

  @Input() responsive = true;

  saveImage(blob: Blob | any) {
    this.done.emit(blob);
  }
}
