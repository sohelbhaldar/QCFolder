import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerUnreachableComponent } from './server-unreachable.component';

describe('ServerUnreachableComponent', () => {
  let component: ServerUnreachableComponent;
  let fixture: ComponentFixture<ServerUnreachableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerUnreachableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerUnreachableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
