import {Component, EventEmitter, Input, Output} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';

@Component({
  selector: 'app-modal-footer',
  templateUrl: './modal-footer.component.html',
  styleUrls: ['./modal-footer.component.scss']
})
export class ModalFooterComponent {

  @Input() public bsModalRef: BsModalRef;
  @Input() public showDelete = false;
  @Input() public showApply ? = true;
  @Input() public applyButtonText = 'Apply';
  @Input() public applyButtonDisabled = false;

  @Output() public applyAction = new EventEmitter();
  @Output() public deleteAction = new EventEmitter();

  constructor() { }

  applyClicked() {
    this.applyAction.emit();
  }

  deleteClicked() {
    this.deleteAction.emit();
  }

}
