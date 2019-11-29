import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DerogationheaderComponent } from './derogationheader.component';

describe('DerogationheaderComponent', () => {
  let component: DerogationheaderComponent;
  let fixture: ComponentFixture<DerogationheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DerogationheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DerogationheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
