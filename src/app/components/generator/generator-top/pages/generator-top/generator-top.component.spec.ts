import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratorTopComponent } from './generator-top.component';

describe('GeneratorTopComponent', () => {
  let component: GeneratorTopComponent;
  let fixture: ComponentFixture<GeneratorTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneratorTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratorTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
