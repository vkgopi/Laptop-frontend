import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistInfoComponent } from './wishlist-info.component';

describe('WishlistInfoComponent', () => {
  let component: WishlistInfoComponent;
  let fixture: ComponentFixture<WishlistInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WishlistInfoComponent]
    });
    fixture = TestBed.createComponent(WishlistInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
