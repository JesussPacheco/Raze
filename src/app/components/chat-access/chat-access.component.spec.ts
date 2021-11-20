import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatAccessComponent } from './chat-access.component';

describe('ChatAccessComponent', () => {
  let component: ChatAccessComponent;
  let fixture: ComponentFixture<ChatAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatAccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
