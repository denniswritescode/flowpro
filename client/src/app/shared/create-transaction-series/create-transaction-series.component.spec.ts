import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTransactionSeriesComponent } from './create-transaction-series.component';

describe('CreateTransactionSeriesComponent', () => {
  let component: CreateTransactionSeriesComponent;
  let fixture: ComponentFixture<CreateTransactionSeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTransactionSeriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTransactionSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
