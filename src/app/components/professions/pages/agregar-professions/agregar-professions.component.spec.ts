import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarProfessionsComponent } from './agregar-professions.component';

describe('AgregarProfessionsComponent', () => {
  let component: AgregarProfessionsComponent;
  let fixture: ComponentFixture<AgregarProfessionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarProfessionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarProfessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
