import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Testservisucom2Component } from './testservisucom2.component';

describe('Testservisucom2Component', () => {
  let component: Testservisucom2Component;
  let fixture: ComponentFixture<Testservisucom2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testservisucom2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testservisucom2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
