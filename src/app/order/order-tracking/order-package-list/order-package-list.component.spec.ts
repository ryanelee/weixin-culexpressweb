import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderPackageListComponent } from './order-package-list.component';

describe('OrderPackageListComponent', () => {
  let component: OrderPackageListComponent;
  let fixture: ComponentFixture<OrderPackageListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderPackageListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderPackageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
