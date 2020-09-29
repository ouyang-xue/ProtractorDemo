import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {ModalExampleComponent} from './modal-example/modal-example.component';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';

@Component({
  selector: 'app-form-table',
  templateUrl: './form-table.component.html',
  styleUrls: ['./form-table.component.css'],
  providers: [BsModalService]
})
export class FormTableComponent implements OnInit {
  @Input() display = false;
  @Output() childEvent = new EventEmitter<any>();
  private newReportRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  close() {
    this.display = false;
    this.childEvent.emit();
  }

  openModal() {
    this.newReportRef = this.modalService.show(ModalExampleComponent, {class: 'example-modal'});
    this.newReportRef.content.oid = null;
    this.newReportRef.content.onClose = () => {
      console.log('################ ngx-modal-demo close');
    };
  }
}
