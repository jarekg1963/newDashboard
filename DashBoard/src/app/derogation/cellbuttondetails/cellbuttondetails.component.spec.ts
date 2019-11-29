import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CellbuttondetailsComponent } from './cellbuttondetails.component';

describe('CellbuttondetailsComponent', () => {
  let component: CellbuttondetailsComponent;
  let fixture: ComponentFixture<CellbuttondetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CellbuttondetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CellbuttondetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
