import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefInwardsComponent } from './ref-inwards.component';

describe('RefInwardsComponent', () => {
  let component: RefInwardsComponent;
  let fixture: ComponentFixture<RefInwardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefInwardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefInwardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
