import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  public bsModalRef: BsModalRef;

  @Input() public modalTitle: string;
  @Input() public showDelete = false;
  @Input() public showApply ? = true;

  @Output() public deleteAction = new EventEmitter();
  @Output() public applyAction = new EventEmitter();

  constructor(private injector: Injector) {
    this.bsModalRef = this.injector.get(BsModalRef);
  }

  deleteClicked() {
    this.deleteAction.emit();
  }

  applyClicked() {
    this.applyAction.emit();
  }
}
