import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdetailderogationComponent } from './editdetailderogation.component';

describe('EditdetailderogationComponent', () => {
  let component: EditdetailderogationComponent;
  let fixture: ComponentFixture<EditdetailderogationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditdetailderogationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditdetailderogationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
