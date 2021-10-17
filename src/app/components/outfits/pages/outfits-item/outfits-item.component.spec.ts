import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutfitsItemComponent } from './outfits-item.component';

describe('OutfitsItemComponent', () => {
  let component: OutfitsItemComponent;
  let fixture: ComponentFixture<OutfitsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutfitsItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutfitsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
