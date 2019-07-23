import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PleaseEnterAllCheckPointsComponent } from './please-enter-all-check-points.component';

describe('PleaseEnterAllCheckPointsComponent', () => {
  let component: PleaseEnterAllCheckPointsComponent;
  let fixture: ComponentFixture<PleaseEnterAllCheckPointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PleaseEnterAllCheckPointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PleaseEnterAllCheckPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
