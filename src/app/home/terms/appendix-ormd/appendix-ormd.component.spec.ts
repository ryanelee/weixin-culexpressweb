import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppendixOrmdComponent } from './appendix-ormd.component';

describe('AppendixOrmdComponent', () => {
  let component: AppendixOrmdComponent;
  let fixture: ComponentFixture<AppendixOrmdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppendixOrmdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppendixOrmdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
