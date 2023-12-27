import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOrderInfoComponent } from './my-order-info.component';

describe('MyOrderInfoComponent', () => {
  let component: MyOrderInfoComponent;
  let fixture: ComponentFixture<MyOrderInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyOrderInfoComponent]
    });
    fixture = TestBed.createComponent(MyOrderInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
