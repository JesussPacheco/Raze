import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutfitTypesManagementComponent } from './outfit-types-management.component';

describe('OutfitTypesManagementComponent', () => {
  let component: OutfitTypesManagementComponent;
  let fixture: ComponentFixture<OutfitTypesManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutfitTypesManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutfitTypesManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
