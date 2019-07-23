import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QcTabComponent } from './qc-tab.component';

describe('QcTabComponent', () => {
  let component: QcTabComponent;
  let fixture: ComponentFixture<QcTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QcTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QcTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
