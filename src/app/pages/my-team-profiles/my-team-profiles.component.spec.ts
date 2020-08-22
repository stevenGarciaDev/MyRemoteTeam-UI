import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTeamProfilesComponent } from './my-team-profiles.component';

describe('MyTeamProfilesComponent', () => {
  let component: MyTeamProfilesComponent;
  let fixture: ComponentFixture<MyTeamProfilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTeamProfilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTeamProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
