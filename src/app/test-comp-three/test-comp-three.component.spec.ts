import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCompThreeComponent } from './test-comp-three.component';

describe('TestCompThreeComponent', () => {
  let component: TestCompThreeComponent;
  let fixture: ComponentFixture<TestCompThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestCompThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCompThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
