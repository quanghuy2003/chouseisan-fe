import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindVoteComponent } from './find-vote.component';

describe('FindVoteComponent', () => {
  let component: FindVoteComponent;
  let fixture: ComponentFixture<FindVoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindVoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
