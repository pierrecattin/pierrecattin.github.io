import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayoffDialogComponent } from './payoff-dialog.component';

describe('PayoffDialogComponent', () => {
  let component: PayoffDialogComponent;
  let fixture: ComponentFixture<PayoffDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayoffDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayoffDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
