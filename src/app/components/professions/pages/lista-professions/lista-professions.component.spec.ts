import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProfessionsComponent } from './lista-professions.component';

describe('ListaProfessionsComponent', () => {
  let component: ListaProfessionsComponent;
  let fixture: ComponentFixture<ListaProfessionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaProfessionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaProfessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
