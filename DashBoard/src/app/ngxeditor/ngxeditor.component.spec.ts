import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxeditorComponent } from './ngxeditor.component';

describe('NgxeditorComponent', () => {
  let component: NgxeditorComponent;
  let fixture: ComponentFixture<NgxeditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxeditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxeditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
