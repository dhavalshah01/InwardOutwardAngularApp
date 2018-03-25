import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeTypeComponent } from './office-type.component';

describe('OfficeTypeComponent', () => {
  let component: OfficeTypeComponent;
  let fixture: ComponentFixture<OfficeTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficeTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
