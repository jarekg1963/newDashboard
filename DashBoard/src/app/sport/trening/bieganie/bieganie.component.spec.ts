import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BieganieComponent } from './bieganie.component';

describe('BieganieComponent', () => {
  let component: BieganieComponent;
  let fixture: ComponentFixture<BieganieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BieganieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BieganieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
