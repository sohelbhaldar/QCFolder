import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataCreatedSuccessFullyComponent } from './data-created-success-fully.component';

describe('DataCreatedSuccessFullyComponent', () => {
  let component: DataCreatedSuccessFullyComponent;
  let fixture: ComponentFixture<DataCreatedSuccessFullyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataCreatedSuccessFullyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataCreatedSuccessFullyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
