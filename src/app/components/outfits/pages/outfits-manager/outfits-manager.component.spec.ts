import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutfitsManagerComponent } from './outfits-manager.component';

describe('OutfitsManagerComponent', () => {
  let component: OutfitsManagerComponent;
  let fixture: ComponentFixture<OutfitsManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutfitsManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutfitsManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
