import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCompFourComponent } from './test-comp-four.component';

describe('TestCompFourComponent', () => {
  let component: TestCompFourComponent;
  let fixture: ComponentFixture<TestCompFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestCompFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCompFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
