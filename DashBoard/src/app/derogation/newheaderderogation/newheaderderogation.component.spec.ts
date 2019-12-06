import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewheaderderogationComponent } from './newheaderderogation.component';

describe('NewheaderderogationComponent', () => {
  let component: NewheaderderogationComponent;
  let fixture: ComponentFixture<NewheaderderogationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewheaderderogationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewheaderderogationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
