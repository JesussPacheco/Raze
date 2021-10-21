import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFashionComponent } from './add-fashion.component';

describe('AddFashionComponent', () => {
  let component: AddFashionComponent;
  let fixture: ComponentFixture<AddFashionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFashionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFashionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
