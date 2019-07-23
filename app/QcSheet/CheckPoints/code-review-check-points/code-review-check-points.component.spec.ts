import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeReviewCheckPointsComponent } from './code-review-check-points.component';

describe('CodeReviewCheckPointsComponent', () => {
  let component: CodeReviewCheckPointsComponent;
  let fixture: ComponentFixture<CodeReviewCheckPointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeReviewCheckPointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeReviewCheckPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
