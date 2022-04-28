import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindAllEventComponent } from './find-all-event.component';

describe('FindAllEventComponent', () => {
  let component: FindAllEventComponent;
  let fixture: ComponentFixture<FindAllEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindAllEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindAllEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
