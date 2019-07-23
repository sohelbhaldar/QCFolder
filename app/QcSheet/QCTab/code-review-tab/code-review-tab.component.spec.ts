import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeReviewTabComponent } from './code-review-tab.component';

describe('CodeReviewTabComponent', () => {
  let component: CodeReviewTabComponent;
  let fixture: ComponentFixture<CodeReviewTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeReviewTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeReviewTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
