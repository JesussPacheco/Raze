import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutfitTypesEditComponent } from './outfit-types-edit.component';

describe('OutfitTypesEditComponent', () => {
  let component: OutfitTypesEditComponent;
  let fixture: ComponentFixture<OutfitTypesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutfitTypesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutfitTypesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
