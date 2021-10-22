import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutfitTypesDeleteComponent } from './outfit-types-delete.component';

describe('OutfitTypesDeleteComponent', () => {
  let component: OutfitTypesDeleteComponent;
  let fixture: ComponentFixture<OutfitTypesDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutfitTypesDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutfitTypesDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
