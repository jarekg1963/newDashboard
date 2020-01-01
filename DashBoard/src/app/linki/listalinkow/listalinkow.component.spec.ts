import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListalinkowComponent } from './listalinkow.component';

describe('ListalinkowComponent', () => {
  let component: ListalinkowComponent;
  let fixture: ComponentFixture<ListalinkowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListalinkowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListalinkowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
