import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {ModalExampleComponent} from '../form-table/modal-example/modal-example.component';

@Component({
  selector: 'app-test-comp',
  templateUrl: './test-comp.component.html',
  styleUrls: ['./test-comp.component.css']
})
export class TestCompComponent implements OnInit {


  private newReportRef: BsModalRef;
  constructor(private modalService: BsModalService, private router: Router) { }

  ngOnInit() {
  }

  openModal() {
    this.newReportRef = this.modalService.show(ModalExampleComponent, {class: 'example-modal'});
    this.newReportRef.content.oid = null;
    this.newReportRef.content.onClose = () => {
      console.log('################ ngx-modal-demo close');
    };
  }

  navigateTo() {
    this.router.navigate(['/test2']);
  }
}
