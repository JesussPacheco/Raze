import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestFeatureComponent } from './interest-feature.component';

describe('InterestFeatureComponent', () => {
  let component: InterestFeatureComponent;
  let fixture: ComponentFixture<InterestFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterestFeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
