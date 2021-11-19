import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratorManagerComponent } from './generator-manager.component';

describe('GeneratorManagerComponent', () => {
  let component: GeneratorManagerComponent;
  let fixture: ComponentFixture<GeneratorManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneratorManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratorManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
