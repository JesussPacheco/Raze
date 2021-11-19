import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratorBottomComponent } from './generator-bottom.component';

describe('GeneratorBottomComponent', () => {
  let component: GeneratorBottomComponent;
  let fixture: ComponentFixture<GeneratorBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneratorBottomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratorBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
