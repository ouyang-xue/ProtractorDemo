import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-test-comp-three',
  templateUrl: './test-comp-three.component.html',
  styleUrls: ['./test-comp-three.component.css']
})
export class TestCompThreeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  toComp4() {
    this.router.navigate(['/test4']);
  }
}
