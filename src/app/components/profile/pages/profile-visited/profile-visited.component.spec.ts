import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileVisitedComponent } from './profile-visited.component';

describe('ProfileVisitedComponent', () => {
  let component: ProfileVisitedComponent;
  let fixture: ComponentFixture<ProfileVisitedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileVisitedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileVisitedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
