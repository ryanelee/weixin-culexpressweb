import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderNoTrackingComponent } from './order-no-tracking.component';

describe('OrderNoTrackingComponent', () => {
  let component: OrderNoTrackingComponent;
  let fixture: ComponentFixture<OrderNoTrackingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderNoTrackingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderNoTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
