import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkidocumentsComponent } from './linkidocuments.component';

describe('LinkidocumentsComponent', () => {
  let component: LinkidocumentsComponent;
  let fixture: ComponentFixture<LinkidocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkidocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkidocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
