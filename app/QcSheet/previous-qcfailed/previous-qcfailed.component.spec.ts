import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousQCFailedComponent } from './previous-qcfailed.component';

describe('PreviousQCFailedComponent', () => {
  let component: PreviousQCFailedComponent;
  let fixture: ComponentFixture<PreviousQCFailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviousQCFailedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousQCFailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
