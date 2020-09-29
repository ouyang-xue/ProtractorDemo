import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCompTwoComponent } from './test-comp-two.component';

describe('TestCompTwoComponent', () => {
  let component: TestCompTwoComponent;
  let fixture: ComponentFixture<TestCompTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestCompTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCompTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
