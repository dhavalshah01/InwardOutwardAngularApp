import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InwardStatusComponent } from './inward-status.component';

describe('InwardStatusComponent', () => {
  let component: InwardStatusComponent;
  let fixture: ComponentFixture<InwardStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InwardStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InwardStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
