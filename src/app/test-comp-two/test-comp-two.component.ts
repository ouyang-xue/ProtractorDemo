import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ConfirmationService, Message} from 'primeng/api';

@Component({
  selector: 'app-test-comp-two',
  templateUrl: './test-comp-two.component.html',
  styleUrls: ['./test-comp-two.component.css']
})
export class TestCompTwoComponent implements OnInit {
  private userCount: number;
  private username: string;
  msgs: Message[] = [];
  private isSelected: boolean;

  constructor(private confirmationService: ConfirmationService, private router: Router) { }

  ngOnInit(): void {
    this.userCount = 10;
  }

  addValue() {
    this.userCount ++ ;
  }


  confirm1() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.msgs = [{severity: 'info', summary: 'Confirmed', detail: 'You have accepted'}];
      },
      reject: () => {
        this.msgs = [{severity: 'info', summary: 'Rejected', detail: 'You have rejected'}];
      }
    });
  }

  toComp3() {
    this.router.navigate(['/test3']);
  }
}
