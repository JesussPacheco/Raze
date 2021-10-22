import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarProfessionsComponent } from './editar-professions.component';

describe('EditarProfessionsComponent', () => {
  let component: EditarProfessionsComponent;
  let fixture: ComponentFixture<EditarProfessionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarProfessionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarProfessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
