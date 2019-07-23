import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PleaseEnterCommentComponent } from './please-enter-comment.component';

describe('PleaseEnterCommentComponent', () => {
  let component: PleaseEnterCommentComponent;
  let fixture: ComponentFixture<PleaseEnterCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PleaseEnterCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PleaseEnterCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
