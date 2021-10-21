import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionFeatureComponent } from './fashion-feature.component';

describe('FashionFeatureComponent', () => {
  let component: FashionFeatureComponent;
  let fixture: ComponentFixture<FashionFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FashionFeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FashionFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
