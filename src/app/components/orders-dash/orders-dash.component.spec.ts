import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersDashComponent } from './orders-dash.component';

describe('OrdersDashComponent', () => {
  let component: OrdersDashComponent;
  let fixture: ComponentFixture<OrdersDashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdersDashComponent]
    });
    fixture = TestBed.createComponent(OrdersDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
