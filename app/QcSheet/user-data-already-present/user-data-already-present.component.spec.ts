import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDataAlreadyPresentComponent } from './user-data-already-present.component';

describe('UserDataAlreadyPresentComponent', () => {
  let component: UserDataAlreadyPresentComponent;
  let fixture: ComponentFixture<UserDataAlreadyPresentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDataAlreadyPresentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDataAlreadyPresentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
