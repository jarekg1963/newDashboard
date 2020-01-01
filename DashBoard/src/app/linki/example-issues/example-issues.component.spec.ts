import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleIssuesComponent } from './example-issues.component';

describe('ExampleIssuesComponent', () => {
  let component: ExampleIssuesComponent;
  let fixture: ComponentFixture<ExampleIssuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleIssuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
