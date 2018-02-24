import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceIntroComponent } from './insurance-intro.component';

describe('InsuranceIntroComponent', () => {
  let component: InsuranceIntroComponent;
  let fixture: ComponentFixture<InsuranceIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsuranceIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
