import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTopComponent } from './add-top.component';

describe('AddTopComponent', () => {
  let component: AddTopComponent;
  let fixture: ComponentFixture<AddTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
