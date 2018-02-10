import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppendixLimitComponent } from './appendix-limit.component';

describe('AppendixLimitComponent', () => {
  let component: AppendixLimitComponent;
  let fixture: ComponentFixture<AppendixLimitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppendixLimitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppendixLimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
