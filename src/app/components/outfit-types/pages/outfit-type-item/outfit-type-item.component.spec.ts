import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutfitTypeItemComponent } from './outfit-type-item.component';

describe('OutfitTypeItemComponent', () => {
  let component: OutfitTypeItemComponent;
  let fixture: ComponentFixture<OutfitTypeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutfitTypeItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutfitTypeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
