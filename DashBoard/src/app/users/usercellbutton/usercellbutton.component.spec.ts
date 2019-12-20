import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercellbuttonComponent } from './usercellbutton.component';

describe('UsercellbuttonComponent', () => {
  let component: UsercellbuttonComponent;
  let fixture: ComponentFixture<UsercellbuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsercellbuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsercellbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
