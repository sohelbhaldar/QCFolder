import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSubmittedSuccessfullyComponent } from './data-submitted-successfully.component';

describe('DataSubmittedSuccessfullyComponent', () => {
  let component: DataSubmittedSuccessfullyComponent;
  let fixture: ComponentFixture<DataSubmittedSuccessfullyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataSubmittedSuccessfullyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataSubmittedSuccessfullyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
