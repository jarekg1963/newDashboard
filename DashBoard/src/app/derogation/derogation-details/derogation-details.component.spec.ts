import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DerogationDetailsComponent } from './derogation-details.component';

describe('DerogationDetailsComponent', () => {
  let component: DerogationDetailsComponent;
  let fixture: ComponentFixture<DerogationDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DerogationDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DerogationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
