import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Testservisucom1Component } from './testservisucom1.component';

describe('Testservisucom1Component', () => {
  let component: Testservisucom1Component;
  let fixture: ComponentFixture<Testservisucom1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testservisucom1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testservisucom1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
