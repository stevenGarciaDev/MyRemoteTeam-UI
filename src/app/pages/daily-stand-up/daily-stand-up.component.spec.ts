import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyStandUpComponent } from './daily-stand-up.component';

describe('DailyStandUpComponent', () => {
  let component: DailyStandUpComponent;
  let fixture: ComponentFixture<DailyStandUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyStandUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyStandUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
