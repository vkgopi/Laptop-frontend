import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderEmptyComponent } from './order-empty.component';

describe('OrderEmptyComponent', () => {
  let component: OrderEmptyComponent;
  let fixture: ComponentFixture<OrderEmptyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderEmptyComponent]
    });
    fixture = TestBed.createComponent(OrderEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
