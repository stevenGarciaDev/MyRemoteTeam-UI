import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHelpOrdersComponent } from './view-help-orders.component';

describe('ViewHelpOrdersComponent', () => {
  let component: ViewHelpOrdersComponent;
  let fixture: ComponentFixture<ViewHelpOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewHelpOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewHelpOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
