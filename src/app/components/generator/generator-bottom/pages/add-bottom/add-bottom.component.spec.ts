import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBottomComponent } from './add-bottom.component';

describe('AddBottomComponent', () => {
  let component: AddBottomComponent;
  let fixture: ComponentFixture<AddBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBottomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
