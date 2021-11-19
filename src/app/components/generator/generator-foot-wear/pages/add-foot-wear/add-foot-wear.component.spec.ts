import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFootWearComponent } from './add-foot-wear.component';

describe('AddFootWearComponent', () => {
  let component: AddFootWearComponent;
  let fixture: ComponentFixture<AddFootWearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFootWearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFootWearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
