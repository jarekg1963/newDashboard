import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseraddnewComponent } from './useraddnew.component';

describe('UseraddnewComponent', () => {
  let component: UseraddnewComponent;
  let fixture: ComponentFixture<UseraddnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseraddnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseraddnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
