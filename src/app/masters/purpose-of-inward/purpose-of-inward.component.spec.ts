import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurposeOfInwardComponent } from './purpose-of-inward.component';

describe('PurposeOfInwardComponent', () => {
  let component: PurposeOfInwardComponent;
  let fixture: ComponentFixture<PurposeOfInwardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurposeOfInwardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurposeOfInwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
