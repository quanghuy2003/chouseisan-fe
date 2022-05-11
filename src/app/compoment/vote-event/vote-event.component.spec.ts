import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteEventComponent } from './vote-event.component';

describe('VoteEventComponent', () => {
  let component: VoteEventComponent;
  let fixture: ComponentFixture<VoteEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoteEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
