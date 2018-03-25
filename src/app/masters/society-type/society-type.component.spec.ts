import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocietyTypeComponent } from './society-type.component';

describe('SocietyTypeComponent', () => {
  let component: SocietyTypeComponent;
  let fixture: ComponentFixture<SocietyTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocietyTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocietyTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
