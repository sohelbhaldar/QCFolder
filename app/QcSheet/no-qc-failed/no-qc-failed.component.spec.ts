import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoQcFailedComponent } from './no-qc-failed.component';

describe('NoQcFailedComponent', () => {
  let component: NoQcFailedComponent;
  let fixture: ComponentFixture<NoQcFailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoQcFailedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoQcFailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
