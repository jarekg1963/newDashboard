import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewderogationitemComponent } from './addnewderogationitem.component';

describe('AddnewderogationitemComponent', () => {
  let component: AddnewderogationitemComponent;
  let fixture: ComponentFixture<AddnewderogationitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnewderogationitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewderogationitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
