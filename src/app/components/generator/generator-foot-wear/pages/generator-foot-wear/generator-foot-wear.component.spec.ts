import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratorFootWearComponent } from './generator-foot-wear.component';

describe('GeneratorFootWearComponent', () => {
  let component: GeneratorFootWearComponent;
  let fixture: ComponentFixture<GeneratorFootWearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneratorFootWearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratorFootWearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
