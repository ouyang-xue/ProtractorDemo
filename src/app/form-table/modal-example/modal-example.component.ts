import {Component, Injector, Input, OnInit} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-modal-example',
  templateUrl: './modal-example.component.html',
  styleUrls: ['./modal-example.component.css'],
  providers: [BsModalService]
})
export class ModalExampleComponent implements OnInit {

  public bsModalRef: BsModalRef;
  public modalTitle = 'Dialog Example';

  public form: FormGroup;
  private contents: any[] = [];

  public applyButtonText = 'Apply';
  public cancelButtonText = 'Cancel';

  constructor(private injector: Injector) {
    this.bsModalRef = this.injector.get(BsModalRef);
  }

  ngOnInit() {
    for (let i = 0; i < 10; i++) {
      this.contents[i] = 'Name' + i;
    }
  }

  apply() {
    this.bsModalRef.hide();
    this.bsModalRef.content.onClose();
    console.log('############# Apply');
  }

  delete() {
    this.bsModalRef.hide();
    this.bsModalRef.content.onClose();
    console.log('############# Delete');
  }

}
