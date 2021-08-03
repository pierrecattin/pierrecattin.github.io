import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardcellComponent } from './boardcell.component';

describe('BoardcellComponent', () => {
  let component: BoardcellComponent;
  let fixture: ComponentFixture<BoardcellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardcellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardcellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
